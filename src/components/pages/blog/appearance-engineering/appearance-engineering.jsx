import Image from 'next/image';
import PropTypes from 'prop-types';

import BlogPostCard from 'components/pages/blog/blog-post-card';
import Link from 'components/shared/link/link';
import { BLOG_CATEGORY_BASE_PATH } from 'constants/blog';

import { BlogPostCardPropTypes } from '../blog-post-card/blog-post-card';

import PlayIcon from './images/play.inline.svg';

const AppearanceEngineering = ({ appearancesPosts, engineeringPosts }) => (
  <section className="appearance-engineering grid grid-cols-10 gap-x-10 2xl:gap-x-6 lg:gap-x-4">
    <div className="col-span-4">
      <h2 className="flex items-center text-xs font-semibold uppercase leading-none tracking-[0.02em] text-blue-80">
        <span>Appearances</span>
        <span className="ml-2 h-px grow bg-gray-new-20" />
      </h2>
      <ul>
        {appearancesPosts.map(
          (
            {
              post: {
                title,
                appearancePost: { url, coverImage },
              },
            },
            index
          ) => (
            <li key={index} className="mt-6">
              <Link className="group flex items-center space-x-4" to={url}>
                {coverImage ? (
                  <Image
                    className="rounded-md"
                    src={coverImage?.mediaItemUrl}
                    alt={coverImage?.altText || title}
                    width={112}
                    height={112}
                  />
                ) : (
                  <img
                    className="h-28 w-28 rounded-md bg-gray-new-30"
                    src={`data:image/svg+xml;charset=utf-8,%3Csvg width='${112}' height='${112}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`}
                    alt=""
                    width={112}
                    height={112}
                    aria-hidden
                  />
                )}

                <div>
                  <h3 className="text-lg font-medium leading-tight tracking-[-0.02em] transition-colors duration-200 group-hover:text-green-45">
                    {title}
                  </h3>
                  <div className="mt-2 flex items-center">
                    <PlayIcon className="mr-2 inline-block" />
                    <span className="text-sm font-medium leading-tight tracking-[-0.02em] text-blue-80">
                      Listen now
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          )
        )}
      </ul>
      <Link
        className="mt-8 inline-flex items-center text-sm font-medium leading-none tracking-[-0.02em] text-blue-80"
        to={`${BLOG_CATEGORY_BASE_PATH}appearances`}
        withArrow
      >
        All podcasts
      </Link>
    </div>
    <div className="col-span-6 flex flex-col">
      <h2 className="flex items-center text-xs font-semibold uppercase leading-none tracking-[0.02em] text-[#B8ADEB]">
        <span>Engineering</span>
        <span className="ml-2 h-px grow bg-gray-new-20" />
      </h2>
      <div className="mt-6 grid grid-cols-6 gap-x-10 2xl:gap-x-6 lg:gap-x-4">
        <div className="col-span-4">
          {engineeringPosts.slice(0, 1).map(({ post }, index) => (
            <BlogPostCard className="pb-[18px]" {...post} size="md" key={index} />
          ))}
          {engineeringPosts.slice(1, 2).map(({ post }, index) => (
            <BlogPostCard
              className="border-t border-gray-new-15 pt-[18px]"
              {...post}
              size="sm"
              key={index}
            />
          ))}
        </div>
        <div className="col-span-2 grid gap-y-7">
          {engineeringPosts.slice(2, 4).map(({ post }, index) => (
            <BlogPostCard {...post} size="md" key={index} />
          ))}
        </div>
      </div>
      <Link
        className="mt-4 ml-auto inline-flex items-center text-sm font-medium leading-none tracking-[-0.02em] text-[#B8ADEB]"
        to={`${BLOG_CATEGORY_BASE_PATH}engineering`}
        withArrow
      >
        All engineering articles
      </Link>
    </div>
  </section>
);

AppearanceEngineering.propTypes = {
  appearancesPosts: PropTypes.arrayOf(
    PropTypes.shape({
      post: PropTypes.shape({
        title: PropTypes.string,
        appearancePost: PropTypes.shape({
          url: PropTypes.string,
          coverImage: PropTypes.shape({
            mediaItemUrl: PropTypes.string,
            altText: PropTypes.string,
          }),
        }),
      }),
    })
  ),
  engineeringPosts: PropTypes.arrayOf(
    PropTypes.shape({
      post: PropTypes.shape({
        ...BlogPostCardPropTypes,
      }),
    })
  ),
};

export default AppearanceEngineering;
