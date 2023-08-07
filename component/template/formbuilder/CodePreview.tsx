import React from 'react';
import Prism from 'prismjs';
import { FieldTypes } from './FieldEditor';

type Field = {
  name: string;
  placeholder: string;
  type: string;
  isRequired: boolean;
  label: string;
  data?: any;
};

type Line = {
  fields: Field[];
};

type Props = {
  lines: Line[];
};

export const CodePreview: React.FC<Props> = ({ lines }) => {
  const code = `import { Controller, useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import DatePicker, {
  NewDate,
} from '@ComponentFarm/modules/DatePicker/DatePicker';
import ErrorTxt from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';
import { FormWrap } from '@ComponentFarm/common';



type FormFields = {
${lines
  .map(line =>
    line.fields
      .map(
        field =>
          `  ${field.name}: ${
            field.type === FieldTypes.CHECKBOX
              ? 'boolean'
              : field.type === FieldTypes.CHECKBOXGROUP
              ? 'string[]'
              : 'string'
          }, // TODO: replace with the actual value`
      )
      .join('\n')
  )
  .join('\n')}
};

interface FormProps {
  initialData?: FormFields;
  loading?: boolean;
  onSubmit: (data: FormFields) => void;
}

const sampleData = [
  {
    label: 'Apple',
    value: '1',
  },
  {
    label: 'Pear',
    value: '2',
  },
  {
    label: 'Orange',
    value: '3',
  },
];

const productStyles = css\`
  .line1,
  .line2,
  .line3 {
    .field1 {
      width: calc(50% - 25px);
    }
    .field2 {
      width: calc(50% - 25px);
    }
  }
  .line4 {
    .field1 {
      width: 100%;
    }
  }
\`;

const Form: React.FC<FormProps> = ({ initialData, loading, onSubmit }) => {
  const isEdit = !!initialData;
  const defaultValues = isEdit ? initialData : {
${lines
  .map(line =>
    line.fields
      .map(
        field =>
          `    ${field.name}: ${
            field.type === FieldTypes.CHECKBOXGROUP ? '[]' : "''"
          }, // TODO: replace with the actual value`
      )
      .join('\n')
  )
  .join('\n')}
  };

  const {  control, register, handleSubmit, formState: { errors } } = useForm<FormFields>({ defaultValues });
   const onFormSubmit = handleSubmit(data => {
    onSubmit(data);
  });

  return (
    <FormWrap onSubmit={onFormSubmit} css={productStyles}>
${lines
  .map(
    (line, index) => `      <div className="line line${index + 1}">
${line.fields
  .map((field, fieldIndex) => {
    const fieldOptions = field.isRequired
      ? `{...register("${field.name}", { required: "필수 입력항목입니다." })}`
      : `{...register("${field.name}")}`;
    const labelClass = field.isRequired ? 'req' : '';
    switch (field.type) {
      case FieldTypes.TEXT:
        return `        <div className="field${fieldIndex + 1}">
          <label htmlFor="${field.name}" className="${labelClass}">${
            field.label
          }</label>
          <input type="${field.type}" id="${
            field.name
          }" className="inp" placeholder="${
            field.placeholder
          }" ${fieldOptions} />
          {errors.${field.name} && <ErrorTxt>{errors.${
            field.name
          }.message}</ErrorTxt>}
        </div>`;
      case FieldTypes.CHECKBOX:
        return `        <div className="field${fieldIndex + 1}">
          <label htmlFor="${field.name}" className="${labelClass}">${
            field.label
          }</label>
          <input type="${field.type}" id="${
            field.name
          }" className="inp" ${fieldOptions} />
          {errors.${field.name} && <ErrorTxt>{errors.${
            field.name
          }.message}</ErrorTxt>}
        </div>`;
      case FieldTypes.SELECT:
        return `        <div className="field${fieldIndex + 1}">
          <label htmlFor="${field.name}" className="${labelClass}">${
            field.label
          }</label>
          <select id="${field.name}" ${fieldOptions}>
          {/*   {${field.data}.map(el => (
              <option key={el.value} value={el.value}>{el.label}</option> 
            ))}   */}
          </select>
          {errors.${field.name} && <ErrorTxt>{errors.${
            field.name
          }.message}</ErrorTxt>}
        </div>`;
      case FieldTypes.DATEPICKER:
        return `        <Controller control={control} name="${field.name}" 
        ${
          field.isRequired
            ? `rules={{ required: '필수 입력 항목입니다.' }}`
            : ''
        } 
        render={({
          field
        }) => <DatePicker selectedDate={field.value} onChange={(newDate: NewDate) => {
          field.onChange(String(newDate));
        }} />} />\n
        ${
          field.isRequired
            ? `{errors.${field.name} && (
              <ErrorTxt>{errors.${field.name}.message}</ErrorTxt>
          )}\n`
            : ''
        }\n`;
      case FieldTypes.TEXTAREA:
        return `        <div className="field${fieldIndex + 1}">
          <label htmlFor="${field.name}" className="${labelClass}">${
            field.label
          }</label>
          <textarea id="${field.name}" placeholder="${
            field.placeholder
          }" ${fieldOptions} />
          {errors.${field.name} && <ErrorTxt>{errors.${
            field.name
          }.message}</ErrorTxt>}
        </div>`;
      case FieldTypes.CHECKBOXGROUP:
        return `            <Controller
        name="${field.name}"
        control={control}
        defaultValue={[]}
        render={({ field: {  value, ref, ...restField } }) => (
          <CheckBoxGroup
            {...restField}
            options={${field.data}}  
            allChechkHandler={${field.data}}
            initialCheckedValues={value}
            />
        )}
      />\n`;
      case FieldTypes.RADIOGROUP:
        return `            <div className="field${fieldIndex + 1}">
    <label htmlFor="${field.name}" className="${labelClass}">${
      field.label
    }</label>
    <Controller
      name="${field.name}"
      control={control}
      render={({ field: {  value, ref, ...restField } }) => (
        <RadioGroup
          {...restField}
          defaultValue="1"
          onChange={onChange}
          options={${field.data}}
        />
      )}
    />
    {errors.${field.name} && <ErrorTxt>{errors.${
      field.name
    }.message}</ErrorTxt>}
  </div>\n`;
      case FieldTypes.WYSIWYG:
        return `            <div className="field${fieldIndex + 1}">
    <label htmlFor="${field.name}" className="${labelClass}">${
      field.label
    }</label>
    <Controller
      name="${field.name}"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Editor
          value={field.value}
          onChange={value => field.onChange(value)}
        />
      )}
    />
    {errors.${field.name} && <ErrorTxt>{errors.${
      field.name
    }.message}</ErrorTxt>}
  </div>\n`;
      default:
        return '';
    }
  })
  .join('\n')}      </div>`
  )
  .join('\n')}
      <button type="submit">등록</button>
    </FormWrap>
  );
};

export default Form;
`;

  const highlightedCode = Prism.highlight(
    code,
    Prism.languages.javascript,
    'javascript'
  );

  return (
    <pre id="code">
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  );
};

export const CodePreview2: React.FC<Props> = ({ lines }) => {
  const code = `export default const FormView = ({ data }) => {
  return (
    <div>
${lines
  .map(
    (line, index) => `      <div className="line line${index + 1}">
${line.fields
  .map(
    (field, fieldIndex) => `        <div className="field${fieldIndex + 1}">
          <span>${field.label}</span>
          <span>{data.${field.name}}</span>
        </div>`
  )
  .join('\n')}      </div>`
  )
  .join('\n')}
    </div>
  );
}`;

  const highlightedCode = Prism.highlight(
    code,
    Prism.languages.javascript,
    'javascript'
  );

  return (
    <pre id="code2">
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  );
};
