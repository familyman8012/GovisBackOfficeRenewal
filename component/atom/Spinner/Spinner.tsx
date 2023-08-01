import React from 'react';
import * as Loader from 'react-spinners';
import styled from '@emotion/styled';

type SpinnerVariant =
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

type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg';

export interface SpinnerProps {
  variant?: SpinnerVariant;
  width?: number;
  height?: number;
  scaleDown?: SpinnerSize;
  size?: number;
  color?: string;
  radius?: number;
  speedMultiplier?: number;
}

const SmallFade = styled.div`
  position: relative;
  transform: scale(0.5);
  transform-origin: 50% 50%;
  left: 2px;
`;

const Spinner = ({
  variant = 'small',
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
      {variant === 'small' ? (
        <SmallFade>
          <Loader.FadeLoader
            color={color ?? '#36d7b7'}
            className="spinner"
            radius={radius ?? 1}
            speedMultiplier={speedMultiplier ?? 1}
          />
        </SmallFade>
      ) : variant === 'fade' ? (
        <Loader.FadeLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          width={width ?? 5}
          height={height ?? 15}
          radius={radius ?? 2}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : variant === 'beat' ? (
        <Loader.BeatLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : variant === 'climbing' ? (
        <Loader.ClimbingBoxLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : variant === 'clock' ? (
        <Loader.ClockLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : variant === 'pacman' ? (
        <Loader.PacmanLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : variant === 'puff' ? (
        <Loader.PuffLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : variant === 'pulse' ? (
        <Loader.PulseLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : variant === 'ring' ? (
        <Loader.RingLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : variant === 'scale' ? (
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
