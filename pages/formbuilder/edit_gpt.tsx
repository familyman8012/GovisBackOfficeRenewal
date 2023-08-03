// @ts-nocheck
import { useState } from 'react';
import Prism from 'prismjs';
import { css } from '@emotion/react';
import { Button } from '@ComponentFarm/atom/Button/Button';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript'; // for JavaScript syntax highlighting

const FieldTypes = {
  TEXT: 'text',
  SELECT: 'select',
  CHECKBOX: 'checkbox',
  DATEPICKER: 'datepicker',
  TEXTAREA: 'textarea',
};

const CodePreview = ({ lines }) => {
  const code = `import { useForm, Controller } from 'react-hook-form';
  import DatePicker from 'react-datepicker';
  import ErrorTxt from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';

  type FormFields = {
    ${lines
      .map(
        (line, index) =>
          `${line.fields
            .map(
              field =>
                `    ${field.name}: ${
                  field.type === FieldTypes.CHECKBOX ? 'boolean' : 'string'
                } // TODO: replace with the actual value`
            )
            .join(',\n')}`
      )
      .join(',\n')}
  };

 const Form = ({ isEdit = false, initialData = {} }) => {
    // default values
    const defaultValues = isEdit ? initialData : {
  ${lines
    .map(
      (line, index) =>
        `${line.fields
          .map(
            field =>
              `    ${field.name}: '' // TODO: replace with the actual value`
          )
          .join(',\n')}`
    )
    .join(',\n')}
    };
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormFields>({
      defaultValues,
    });
  
    const onSubmit = (data:FormFields) => console.log(data);
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
      ${lines
        .map(
          (line, index) =>
            `      <div className="line${index + 1}">\n${line.fields
              .map((field, fieldIndex) => {
                const fieldOptions = field.isRequired
                  ? `{...register("${field.name}", { required: "필수 입력항목입니다." })}`
                  : `{...register("${field.name}")}`;
                const labelClass = field.isRequired ? 'req' : '';

                switch (field.type) {
                  case FieldTypes.TEXT:
                  case FieldTypes.CHECKBOX:
                    return `            <div className="field${fieldIndex + 1}">
                    <label htmlFor="${field.name}" className="${labelClass}">${
                      field.label
                    }</label>
                    <input type="${field.type}" id="${
                      field.name
                    }" className="inp" ${fieldOptions} />
                    {errors.${field.name} && <ErrorTxt>{errors.${
                      field.name
                    }.message}</ErrorTxt>}
                </div>\n`;
                  case FieldTypes.SELECT:
                    return `            <div className="field${fieldIndex + 1}">
                          <label htmlFor="${
                            field.name
                          }" className="${labelClass}">${field.label}</label>
                          <select id="${field.name}" ${fieldOptions}>
                            {${field.data}.map(el => (
                              <option value={el.value}>{el.label}</option>
                            ))}
                          </select>
                          {errors.${field.name} && <ErrorTxt>{errors.${
                            field.name
                          }.message}</ErrorTxt>}
                      </div>\n`;
                  case FieldTypes.DATEPICKER:
                    return `        <Controller
                control={control}
                name="${field.name}"
                render={({ field }) => (
                  <DatePicker selected={field.value} onChange={(date) => field.onChange(date)} />
                )}
              />\n`;
                  case FieldTypes.TEXTAREA:
                    return `            <div className="field${fieldIndex + 1}">
                    <label htmlFor="${field.name}" className="${labelClass}">${
                      field.label
                    }</label>
                    <textarea id="${field.name}" ${fieldOptions} />
                    {errors.${field.name} && <ErrorTxt>{errors.${
                      field.name
                    }.message}</ErrorTxt>}
                </div>\n`;
                  default:
                    return '';
                }
              })
              .join('')}      </div>\n`
        )
        .join('')}\n    </form>\n  );\n}\n\n export default Form`;
  // highlight code
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

const FieldEditor = ({ lineIndex, fieldIndex, field, lines, setLines }) => {
  const [editing, setEditing] = useState(false);
  const [tempField, setTempField] = useState(field);

  const saveField = () => {
    const newLines = lines.map((line, idx) => {
      if (idx !== lineIndex) return line;
      return {
        ...line,
        fields: line.fields.map((f, fIdx) => {
          if (fIdx !== fieldIndex) return f;
          return tempField;
        }),
      };
    });
    setLines(newLines);
    setEditing(false);
  };

  if (editing) {
    return (
      <div>
        <input
          type="text"
          className="inp"
          value={tempField.label}
          onChange={e => setTempField({ ...tempField, label: e.target.value })}
        />
        <input
          type="text"
          className="inp"
          value={tempField.name}
          onChange={e => setTempField({ ...tempField, name: e.target.value })}
        />
        <select
          value={tempField.type}
          onChange={e => setTempField({ ...tempField, type: e.target.value })}
        >
          <option value={FieldTypes.TEXT}>Text</option>
          <option value={FieldTypes.SELECT}>Select</option>
          <option value={FieldTypes.CHECKBOX}>Checkbox</option>
          <option value={FieldTypes.DATEPICKER}>DatePicker</option>
          <option value={FieldTypes.TEXTAREA}>Textarea</option>
        </select>
        <input
          type="checkbox"
          checked={tempField.isRequired}
          onChange={e =>
            setTempField({ ...tempField, isRequired: e.target.checked })
          }
        />
        Required
        <button type="button" onClick={saveField}>
          Save
        </button>
        <button type="button" onClick={() => setEditing(false)}>
          Cancel
        </button>
      </div>
    );
  }
  return (
    <div
      css={css`
        span {
          margin-right: 10px;
        }
      `}
    >
      {lineIndex + 1}.{fieldIndex + 1})
      <span>
        <strong>Label: </strong> {field.label}
      </span>
      <button type="button" onClick={() => setEditing(true)}>
        Edit
      </button>
    </div>
  );
};

const FormBuilder = () => {
  const [lines, setLines] = useState([]);
  const [selectedLineIndex, setSelectedLineIndex] = useState(null);
  const [selectedFieldType, setSelectedFieldType] = useState(FieldTypes.TEXT);
  const [newLabel, setNewLabel] = useState('');
  const [newName, setNewName] = useState('');
  const [isRequired, setIsRequired] = useState(true);
  const [dataField, setDataField] = useState(''); // New state

  const addLine = () => {
    setLines([...lines, { fields: [] }]);
    setSelectedLineIndex(lines.length);
  };

  const addField = () => {
    const newLines = lines.map((line, index) => {
      if (index !== selectedLineIndex) return line;
      return {
        ...line,
        fields: [
          ...line.fields,
          {
            type: selectedFieldType,
            label: newLabel,
            name: newName,
            isRequired,
            data:
              selectedFieldType === FieldTypes.SELECT ? dataField : undefined, // New property
          },
        ],
      };
    });
    setLines(newLines);
    setNewLabel('');
    setNewName('');
    setIsRequired(false);
    setSelectedFieldType(FieldTypes.TEXT);
    setDataField(''); // Reset
  };

  return (
    <div>
      <div className="box_form_handling">
        <Button variant="primary" onClick={addLine} className="btn_line">
          Add Line
        </Button>
        {selectedLineIndex !== null && (
          <div style={{ display: 'flex' }}>
            <input
              type="text"
              placeholder="Label"
              className="inp"
              value={newLabel}
              onChange={e => setNewLabel(e.target.value)}
            />
            <input
              type="text"
              placeholder="Name"
              className="inp"
              value={newName}
              onChange={e => setNewName(e.target.value)}
            />
            <select
              value={selectedFieldType}
              onChange={e => setSelectedFieldType(e.target.value)}
            >
              <option value={FieldTypes.TEXT}>Text</option>
              <option value={FieldTypes.SELECT}>Select</option>
              <option value={FieldTypes.CHECKBOX}>Checkbox</option>
              <option value={FieldTypes.DATEPICKER}>DatePicker</option>
              <option value={FieldTypes.TEXTAREA}>Textarea</option>
            </select>
            {selectedFieldType === FieldTypes.SELECT && (
              <input
                type="text"
                placeholder="Data Field"
                className="inp"
                value={dataField}
                onChange={e => setDataField(e.target.value)}
              />
            )}
            <label>
              <input
                type="radio"
                name="required"
                value="Yes"
                checked={isRequired}
                onChange={() => setIsRequired(true)}
              />
              Required
            </label>
            <label>
              <input
                type="radio"
                name="required"
                value="No"
                checked={!isRequired}
                onChange={() => setIsRequired(false)}
              />
              Not Required
            </label>
            <Button variant="primary" onClick={addField} className="btn_field">
              Add Field
            </Button>
          </div>
        )}
        {lines.map((line, lineIndex) => (
          <div key={line} style={{ marginTop: '20px' }}>
            <div>{lineIndex + 1}째 줄</div>
            <div style={{ display: 'flex' }}>
              {line.fields.map((field, fieldIndex) => (
                <div key={field} style={{ marginLeft: '10px' }}>
                  <FieldEditor
                    key={field}
                    lineIndex={lineIndex}
                    fieldIndex={fieldIndex}
                    field={field}
                    lines={lines}
                    setLines={setLines}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="box_code">
        <h2>등록.수정 코드</h2>
        <CodePreview lines={lines} />
      </div>
    </div>
  );
};

export default FormBuilder;
