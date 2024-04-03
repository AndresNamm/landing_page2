import type { ReactNode } from 'react';

type ISimpleSectionProps = {
  title?: string;
  description?: ReactNode;
  yPadding?: string;
  children?: ReactNode;
};

const SimpleSection = (props: ISimpleSectionProps) => (
  <div
    className={`mx-auto max-w-screen-lg px-3 ${
      props.yPadding ? props.yPadding : 'py-1'
    }`}
  >
    {(props.title || props.description) && (
      <div className="flex justify-center">
        {props.title && (
          <h2 className="text-darkgray-900 text-4xl font-bold">
            {props.title}
          </h2>
        )}
        {props.description && <div>{props.description}</div>}
      </div>
    )}
  </div>
);

export { SimpleSection };
