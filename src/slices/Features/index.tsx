import { Content } from '@prismicio/client';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
import Bounded from '@/components/Bounded';
import Heading from '@/components/Heading';

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="text-center mb-12">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading
      as="h3"
      size="sm"
      className="mb-3 font-medium sm:text-left text-center"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-base font-medium font-body text-slate-600 sm:text-left text-center">
      {children}
    </p>
  ),
};

const icons = {
  calendar: <CalendarIcon />,
  bargraph: <BarGraphIcon />,
  clover: <CloverIcon />,
  hourglass: <HourGlassIcon />,
};
/**
 
* Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={components} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">
        {slice.items.map((item, index) => (
          <div
            key={index}
            className="max-w-xs grid sm:place-items-start place-items-center"
          >
            {item.icon && <div className="mb-5">{icons[item.icon]}</div>}
            <PrismicRichText components={components} field={item.title} />
            <PrismicRichText components={components} field={item.description} />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Features;

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
      <path
        stroke="#0891B2"
        strokeWidth="5"
        d="M6.7 40c0-12.6 0-18.9 3.9-22.8 3.9-3.9 10.2-3.9 22.7-3.9h13.4c12.5 0 18.8 0 22.7 4 4 3.8 4 10.1 4 22.7v6.7c0 12.5 0 18.8-4 22.7-3.9 4-10.2 4-22.7 4H33.3c-12.5 0-18.8 0-22.7-4-4-3.9-4-10.2-4-22.7V40z"
      ></path>
      <path
        stroke="#0891B2"
        strokeLinecap="round"
        strokeOpacity="0.5"
        strokeWidth="5"
        d="M23.3 13.3v-5m33.4 5v-5M8.3 30h63.4"
      ></path>
      <path
        fill="#0891B2"
        d="M60 56.7a3.3 3.3 0 11-6.7 0 3.3 3.3 0 016.7 0zm0-13.4a3.3 3.3 0 11-6.7 0 3.3 3.3 0 016.7 0zM43.3 56.7a3.3 3.3 0 11-6.6 0 3.3 3.3 0 016.6 0zm0-13.4a3.3 3.3 0 11-6.6 0 3.3 3.3 0 016.6 0zM26.7 56.7a3.3 3.3 0 11-6.7 0 3.3 3.3 0 016.7 0zm0-13.4a3.3 3.3 0 11-6.7 0 3.3 3.3 0 016.7 0z"
      ></path>
    </svg>
  );
}

function BarGraphIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
      <g stroke="#0891B2" strokeWidth="5" clipPath="url(#a)">
        <path strokeLinecap="round" d="M73.3 73.3H6.7"></path>
        <path
          strokeOpacity="0.5"
          d="M70 73.3v-25a5 5 0 00-5-5H55a5 5 0 00-5 5v25"
        ></path>
        <path d="M50 73.3V16.7c0-4.7 0-7.1-1.5-8.6-1.4-1.4-3.8-1.4-8.5-1.4s-7 0-8.5 1.4C30 9.6 30 12 30 16.7v56.6"></path>
        <path
          strokeOpacity="0.5"
          d="M30 73.3V31.7a5 5 0 00-5-5H15a5 5 0 00-5 5v41.6"
        ></path>
      </g>
      <defs>
        <clipPath id="a">
          <rect width="80" height="80" fill="#fff" rx="16.6"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

function CloverIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      viewBox="0 0 80 80"
    >
      <g stroke="#0891B2" strokeWidth="4.991" clipPath="url(#clip0_1_1492)">
        <path
          strokeOpacity="0.5"
          d="M26.667 26.667h26.666v26.666H26.667V26.667z"
        ></path>
        <path d="M53.333 53.337l10-.002c5.523 0 10.001 4.476 10.002 9.998 0 5.523-4.476 10.001-9.999 10.002-5.522 0-10-4.475-10.001-9.998l-.002-10zM26.67 53.337l-10-.002c-5.523 0-10 4.476-10.002 9.998 0 5.523 4.476 10.001 9.999 10.002 5.522 0 10-4.475 10.001-9.998l.002-10zM53.333 26.667l10 .001c5.523.001 10.001-4.475 10.002-9.998 0-5.523-4.476-10-9.999-10.002-5.522 0-10 4.476-10.001 9.999l-.002 10zM26.67 26.667l-10 .001c-5.523.001-10-4.475-10.002-9.998 0-5.523 4.476-10 9.999-10.002 5.522 0 10 4.476 10.001 9.999l.002 10z"></path>
      </g>
      <defs>
        <clipPath id="clip0_1_1492">
          <rect width="80" height="80" fill="#fff" rx="16.636"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

function HourGlassIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
      <g stroke="#0891B2" strokeWidth="5" clipPath="url(#a)">
        <path d="M49.9 30.2L40 40l-9.9-9.8C20.4 20.6 15.5 15.8 17 11.6l.4-1c2-4 9-4 22.7-4 13.8 0 20.7 0 22.7 4l.4 1c1.4 4.2-3.5 9-13.2 18.6z"></path>
        <path
          strokeOpacity="0.5"
          d="M30.1 49.8L40 40l9.9 9.8c9.7 9.6 14.6 14.4 13.2 18.6l-.4 1c-2 4-9 4-22.7 4-13.8 0-20.7 0-22.7-4a7 7 0 01-.4-1c-1.4-4.2 3.5-9 13.2-18.6z"
        ></path>
      </g>
      <defs>
        <clipPath id="a">
          <rect width="80" height="80" fill="#fff" rx="16.6"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}
