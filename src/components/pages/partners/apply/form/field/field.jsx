import clsx from 'clsx';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import infoSvg from 'components/pages/partners/apply/images/info.svg';
import Tooltip from 'components/shared/tooltip';

const Field = forwardRef(
  (
    {
      className = null,
      label,
      name,
      type = 'text',
      placeholder,
      tag: Tag = 'input',
      tooltipId = null,
      tooltipContent = null,
      error = null,
      ...otherProps
    },
    ref
  ) => (
    <div className={clsx('relative flex flex-col', className)}>
      <label className="flex items-center" htmlFor="firstName">
        {label}
        {tooltipId && tooltipContent && (
          <>
            <a
              className="ml-1.5 flex items-center"
              id={tooltipId}
              data-tooltip-content={tooltipContent}
            >
              <img src={infoSvg} width={14} height={14} alt="" loading="lazy" aria-hidden />
            </a>
            <Tooltip anchorSelect={`#${tooltipId}`} />
          </>
        )}
      </label>
      <Tag
        className={clsx(
          'remove-autocomplete-styles-apply-form mt-3 appearance-none rounded border bg-white bg-opacity-[0.04] px-4 transition-colors duration-200 placeholder:text-gray-new-40 focus:outline-none',
          Tag === 'textarea' ? 'py-3' : 'h-10',
          error
            ? 'border-secondary-1'
            : 'border-transparent hover:border-gray-new-15 focus:border-gray-new-15 active:border-gray-new-15'
        )}
        id={name}
        name={name}
        type={Tag === 'textarea' ? undefined : type}
        placeholder={placeholder}
        ref={ref}
        {...otherProps}
      />
      {error && <span className="mt-2 text-sm leading-none text-secondary-1">{error}</span>}
    </div>
  )
);

Field.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  tag: PropTypes.string,
  tooltipId: PropTypes.string,
  tooltipContent: PropTypes.string,
  error: PropTypes.string,
};

export default Field;
