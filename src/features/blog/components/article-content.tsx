export type BlogArticleType = {} & React.PropsWithChildren;

export function BlogArticleContent({ children }: BlogArticleType) {
  return (
    <article
      className={`max-w-3xl mx-auto
        prose-headings:dark:text-white
        prose-a:dark:text-white 
        prose-code:text-sm prose-code:text-black prose-code:after:content-none prose-code:dark:text-primary prose-code:before:content-none prose-code:font-normal prose-code:py-0.5 prose-code:p-1 prose-code:rounded-md
        prose-pre:bg-slate-900 prose-pre:dark:bg-slate-800 prose-pre:rounded-md prose-pre:p-0
        prose-img:rounded-md prose-img:mx-auto
        prose-blockquote:after:content-none prose-blockquote:before:content-none
        `}
    >
      {children}
    </article>
  );
}
