import React from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay/hooks'
import { pages_listFilmsQuery } from './__generated__/pages_listFilmsQuery.graphql';

export const query = graphql`
  query pages_listFilmsQuery {
    allFilms {
      films {
        id
        title
        openingCrawl
      }
    }
  }
`;

export function Page() {
  const data = useLazyLoadQuery<pages_listFilmsQuery>(query, {}, {})
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive.
        </li>
        <pre>
          {JSON.stringify(data, null, 4)}
        </pre>
      </ul>
    </>
  )
}
