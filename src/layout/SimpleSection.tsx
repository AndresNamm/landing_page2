import type { ReactNode } from 'react';

type ISimpleSectionProps = {
  title?: string;
  description?: string;
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
      <div className="mb-1 text-center">
        {props.title && (
          <h2 className="text-4xl font-bold text-gray-900">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}
  </div>
);

export { SimpleSection };
