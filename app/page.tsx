import Image from "next/image";
import ThemeSwitch from "@/components/theme-switch";
import { generalData } from "@/data/general";
import { contentData } from "@/data/content";
import type { Content } from "@/data/content";

type ContentProps = Content;

const Content: React.FC<ContentProps> = ({ title, items }) => {
  return (
    <section className="my-14 text-sm">
      <h3 className="mb-6">{title}</h3>
      <div className="flex flex-col gap-6">
        {items.map((item, index) => {
          return (
            <div className="flex" key={index}>
              <div className="mr-8 max-w-[100px] lg:max-w-[120px] w-full text-slate-400 dark:text-slate-400">
                {item.date}
              </div>
              <div className="flex flex-col flex-1">
                <h4>{item.title}</h4>
                <p className="text-slate-600 dark:text-gray-400">
                  {item.subTitle}
                </p>
                {item.description ? (
                  <p className="text-slate-600 dark:text-gray-400 mt-2">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <main className="max-w-xl mx-auto px-6 py-20 relative min-h-screen font-light">
        <section className="flex items-center">
          <Image
            alt="Author"
            src='/icon-Dau5BeEtQq-transformed.jpeg'
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <div className="ml-4">
            <h1 className="mb-0.5 text-xl text-slate-900 dark:text-slate-100">
              {generalData.name}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              {generalData.jobTitle}
            </p>
            {generalData.website ? (
              <span className="text-sm text-slate-400 dark:text-slate-400">
                <a
                  href={generalData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {generalData.website
                    .replace(/(^\w+:|^)\/\//, "")
                    .replace("www.", "")}
                </a>
              </span>
            ) : null}
          </div>
        </section>
        <section className="my-9 text-sm">
          <h3 className="mb-1 text-slate-900 dark:text-slate-100">About</h3>
          <div className="text-slate-600 dark:text-slate-300">
            <p>{generalData.about}</p>
          </div>
        </section>
        <section className="my-14 text-sm">
          <h3 className="mb-1 text-slate-900 dark:text-slate-100 mb-6">Skills</h3>
          <div className="wrapper">
            <div className="flex gap-4 flex-wrap">
              <p className="border border-slate-600 px-6 py-2 text-slate-300 hover:text-slate-100 hover:border-slate-300 rounded-lg duration-300">
                Python
              </p>
              <p className="border border-slate-600 px-6 py-2 text-slate-300 hover:text-slate-100 hover:border-slate-300 rounded-lg duration-300">
                Git/Github
              </p>
              <p className="border border-slate-600 px-6 py-2 text-slate-300 hover:text-slate-100 hover:border-slate-300 rounded-lg duration-300">
                MySQL
              </p>
              <p className="border border-slate-600 px-6 py-2 text-slate-300 hover:text-slate-100 hover:border-slate-300 rounded-lg duration-300">
                Data Mining
              </p>
              <p className="border border-slate-600 px-6 py-2 text-slate-300 hover:text-slate-100 hover:border-slate-300 rounded-lg duration-300">
                Machine Learning
              </p>
              <p className="border border-slate-600 px-6 py-2 text-slate-300 hover:text-slate-100 hover:border-slate-300 rounded-lg duration-300">
                RESTful API
              </p>
              <p className="border border-slate-600 px-6 py-2 text-slate-300 hover:text-slate-100 hover:border-slate-300 rounded-lg duration-300">
                IBM SPSS
              </p>
              <p className="border border-slate-600 px-6 py-2 text-slate-300 hover:text-slate-100 hover:border-slate-300 rounded-lg duration-300">
                A/B Testing
              </p>
              <p className="border border-slate-600 px-6 py-2 text-slate-300 hover:text-slate-100 hover:border-slate-300 rounded-lg duration-300">
                Kubeflow
              </p>
              <p className="border border-slate-600 px-6 py-2 text-slate-300 hover:text-slate-100 hover:border-slate-300 rounded-lg duration-300">
                Apache Spark
              </p>
              <p className="border border-slate-600 px-6 py-2 text-slate-300 hover:text-slate-100 hover:border-slate-300 rounded-lg duration-300">
                Docker
              </p>
              <p className="border border-slate-600 px-6 py-2 text-slate-300 hover:text-slate-100 hover:border-slate-300 rounded-lg duration-300">
                Kubernetes
              </p>
              <p className="border border-slate-600 px-6 py-2 text-slate-300 hover:text-slate-100 hover:border-slate-300 rounded-lg duration-300">
                Google Cloud Platform
              </p>
              <p className="border border-slate-600 px-6 py-2 text-slate-300 hover:text-slate-100 hover:border-slate-300 rounded-lg duration-300">
                ML Ops
              </p>
              <p className="border border-slate-600 px-6 py-2 text-slate-300 hover:text-slate-100 hover:border-slate-300 rounded-lg duration-300">
                Microsoft Office
              </p>
            </div>
          </div>
        </section>
        {contentData.map((content, index) => {
          return <Content {...content} key={index} />;
        })}
        <section className="my-14 text-sm">
          <h3 className="mb-6 text-slate-900">Contact</h3>
          <div className="flex flex-col gap-6">
            {generalData.contacts.map((contact, index) => {
              return (
                <div className="flex" key={index}>
                  <div className="mr-8 max-w-[100px] lg:max-w-[120px] w-full text-slate-400 dark:text-slate-400">
                    {contact.label}
                  </div>
                  <div className="flex flex-col flex-1 text-slate-900 dark:text-slate-100">
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex"
                    >
                      {contact.value}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                          className="fill-current text-slate-900 dark:text-slate-100"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>
    </>
  );
}
