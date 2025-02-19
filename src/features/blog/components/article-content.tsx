import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export type BlogArticleType = { content: string };

export function BlogArticleContent({ content }: BlogArticleType) {
  return (
    <article
      className={`max-w-3xl mx-auto
        prose-headings:dark:text-white
        prose-a:dark:text-white 
        prose-code:text-sm prose-code:text-black prose-code:after:content-none prose-code:dark:text-primary prose-code:before:content-none prose-code:font-normal prose-code:py-0.5 prose-code:p-1 prose-code:rounded-md
        prose-pre:rounded-md prose-pre:p-0
        prose-img:rounded-md prose-img:mx-auto
        prose-blockquote:after:content-none prose-blockquote:before:content-none
        `}
    >
      <Markdown
        components={{
          code(props: any) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language="javascript"
                style={docco}
                className="not-prose !p-6"
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
        className="post"
      >
        {content}
      </Markdown>
    </article>
  );
}
