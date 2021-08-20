import { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}

    {/* <div className="border-b border-gray-300">
      <div className="pt-16 pb-8">
        <div className="font-bold text-3xl text-gray-900">
          {AppConfig.title}
        </div>
        <div className="text-xl">{AppConfig.description}</div>
      </div>
      <div>
        <ul className="flex flex-wrap text-xl">
          <li className="mr-6">
            <Link href="/">
              <a className="text-gray-700 border-none hover:text-gray-900">
                Home
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/about/">
              <a className="text-gray-700 border-none hover:text-gray-900">
                About
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div> */}

    <div className="py-5 text-xl content">{props.children}</div>
  </div>
);

export { Main };
