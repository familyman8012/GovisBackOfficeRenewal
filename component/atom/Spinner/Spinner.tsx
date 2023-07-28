import React from 'react';
import * as Loader from 'react-spinners';
import styled from '@emotion/styled';

type SpinnerType =
  | 'beat'
  | 'climbing'
  | 'clock'
  | 'fade'
  | 'small'
  | 'pacman'
  | 'puff'
  | 'pulse'
  | 'ring'
  | 'scale'
  | 'sync';

export interface SpinnerProps {
  type?: SpinnerType;
  width?: number;
  height?: number;
  scaleDown?: number;
  size?: number;
  color?: string;
  radius?: number;
  speedMultiplier?: number;
}

const SmallFade = styled.div<{ scaleDown?: number }>`
  .spinner {
    width: 30px;
    height: 30px;

    span {
      width: calc(5px / ${props => props.scaleDown || 2}) !important;
      height: calc(15px / ${props => props.scaleDown || 2}) !important;
      &:nth-of-type(1) {
        top: calc(20px / ${props => props.scaleDown || 2}) !important;
        left: 0px;
      }
      &:nth-of-type(2) {
        top: calc(13.6364px / ${props => props.scaleDown || 2}) !important;
        left: calc(13.6364px / ${props => props.scaleDown || 2}) !important;
      }
      &:nth-of-type(3) {
        top: calc(0px / ${props => props.scaleDown || 2}) !important;
        left: calc(20px / ${props => props.scaleDown || 2}) !important;
      }
      &:nth-of-type(4) {
        top: calc(-13.6364px / ${props => props.scaleDown || 2}) !important;
        left: calc(13.6364px / ${props => props.scaleDown || 2}) !important;
      }
      &:nth-of-type(5) {
        top: calc(-20px / ${props => props.scaleDown || 2}) !important;
        left: calc(0px / ${props => props.scaleDown || 2}) !important;
      }
      &:nth-of-type(6) {
        top: calc(-13.6364px / ${props => props.scaleDown || 2}) !important;
        left: calc(-13.6364px / ${props => props.scaleDown || 2}) !important;
      }
      &:nth-of-type(7) {
        top: calc(0px / ${props => props.scaleDown || 2}) !important;
        left: calc(-20px / ${props => props.scaleDown || 2}) !important;
      }
      &:nth-of-type(8) {
        top: calc(13.6364px / ${props => props.scaleDown || 2}) !important;
        left: calc(-13.6364px / ${props => props.scaleDown || 2}) !important;
      }
    }
  }
`;

const Spinner = ({
  type = 'small',
  width,
  height,
  size,
  scaleDown,
  color,
  radius,
  speedMultiplier,
}: SpinnerProps) => {
  return (
    <>
      {type === 'small' ? (
        <SmallFade scaleDown={scaleDown}>
          <Loader.FadeLoader
            color={color ?? '#36d7b7'}
            className="spinner"
            radius={radius ?? 1}
            speedMultiplier={speedMultiplier ?? 1}
          />
        </SmallFade>
      ) : type === 'fade' ? (
        <Loader.FadeLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          width={width ?? 5}
          height={height ?? 15}
          radius={radius ?? 2}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : type === 'beat' ? (
        <Loader.BeatLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : type === 'climbing' ? (
        <Loader.ClimbingBoxLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : type === 'clock' ? (
        <Loader.ClockLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : type === 'pacman' ? (
        <Loader.PacmanLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : type === 'puff' ? (
        <Loader.PuffLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : type === 'pulse' ? (
        <Loader.PulseLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : type === 'ring' ? (
        <Loader.RingLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : type === 'scale' ? (
        <Loader.ScaleLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          width={width ?? 4}
          height={height ?? 35}
          radius={radius ?? 2}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : (
        <Loader.SyncLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      )}
    </>
  );
};

export default Spinner;
