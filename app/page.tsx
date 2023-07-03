import Image from "next/image";
import { aboutData } from "@/data/about";
import { experienceData } from "@/data/experience";
import type { ContentExperience } from "@/data/experience";
import { projectData } from "@/data/project";
import type { ContentProject } from "@/data/project";
import { collegeData } from "@/data/college";
import type { ContentCollege } from "@/data/college";
import { skillData } from "@/data/skills";
import type { ContentSkill } from "@/data/skills";

type ContentSkills = ContentSkill;
type ContentExperiences = ContentExperience;
type ContentProjects = ContentProject;
type ContentColleges = ContentCollege;


const ContentSkill: React.FC<ContentSkills> = ({ title, items }) => {
  return (
    <section className="my-14 text-sm">
      <h3 className="mb-6">{title}</h3>
      <div className="wrapper">
        <div className="flex gap-4 flex-wrap">

          {items.map((item, index) => {
            return (
              <p key='index' className="border border-slate-600 px-6 py-2 text-slate-300 hover:text-slate-100 hover:border-slate-300 rounded-lg duration-300">
                {item.skill}
              </p>
            );
          })}
        </div>
      </div>

    </section>
  )
};

const ContentExperience: React.FC<ContentExperiences> = ({ title, items }) => {
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
                  <ul className="text-slate-600 dark:text-gray-400 mt-2 list-disc mx-3">
                    {item.description.split('. ').map((word, index) => (
                      <li className='my-1' key={index}>{word}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const ContentCollege: React.FC<ContentColleges> = ({ title, items }) => {
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

const ContentProject: React.FC<ContentProjects> = ({ title, items }) => {
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
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline inline-flex"
                >
                  {item.title}
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
                <p className="text-slate-600 dark:text-gray-400">
                  {item.subTitle}
                </p>
                {item.description ? (
                  <ul className="text-slate-600 dark:text-gray-400 mt-2 list-disc mx-3">
                    {item.description.split('. ').map((word, index) => (
                      <li className='my-1' key={index}>{word}</li>
                    ))}
                  </ul>
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
            src="/icon-Dau5BeEtQq-transformed.jpeg"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <div className="ml-4">
            <h1 className="mb-0.5 text-xl text-slate-900 dark:text-slate-100">
              {aboutData.name}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              {aboutData.jobTitle}
            </p>
          </div>
        </section>
        <section className="my-9 text-sm">
          <h3 className="mb-1 text-slate-900 dark:text-slate-100">About</h3>
          <div className="text-slate-600 dark:text-slate-300">
            <p>{aboutData.about}</p>
          </div>
        </section>

        {skillData.map((content, index) => {
          return <ContentSkill {...content} key={index} />;
        })}
        {experienceData.map((content, index) => {
          return <ContentExperience {...content} key={index} />;
        })}
        {collegeData.map((content, index) => {
          return <ContentCollege {...content} key={index} />;
        })}
        {projectData.map((content, index) => {
          return <ContentProject {...content} key={index} />;
        })}
        <section className="my-14 text-sm">
          <h3 className="mb-6 text-slate-900">Contact</h3>
          <div className="flex flex-col gap-6">
            {aboutData.contacts.map((contact, index) => {
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
