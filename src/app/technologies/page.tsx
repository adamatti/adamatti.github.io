import { type ReactElement } from 'react';
import ShowTechs from '~/components/show-techs';
import { type Technology } from '../types';

/**
 * FIXME extract shared logic to a new file
 */
const getItems = async (): Promise<Technology[]> => {
  const query = `query { 
    allTeches(sortField: "since", sortOrder: "desc") {
      name color image tags since
    }
  }`;

  const headers = { 'Content-Type': 'application/json' };
  const url = 'http://localhost:3000/';
  const response = await fetch(url, { method: 'POST', headers, body: JSON.stringify({ query }) });
  const json = await response.json();
  return json.data.allTeches;
};

export default async function TechPage(): Promise<ReactElement> {
  const items = await getItems();
  return (
    <>
      <div className="w-full h-auto">
        <div className="mx-auto p-4 flex flex-col justify-center w-auto h-auto">
          <div>
            <p className="text-4xl font-bold inline">Experience</p>
            <div className="flex justify-between">
              <p className="py-5">These are the technologies I have worked with:</p>
            </div>
          </div>
          <ShowTechs items={items} filters={true} />
        </div>
      </div>
    </>
  );
}
