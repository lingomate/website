import React from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay/hooks'

const FilmListQuery = graphql`
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
  const query = useLazyLoadQuery<any>(FilmListQuery, {}, {})
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
          {JSON.stringify(query, null, 4)}
        </pre>
      </ul>
    </>
  )
}
