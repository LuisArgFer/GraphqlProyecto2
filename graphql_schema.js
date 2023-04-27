// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Player" type defines the queryable fields for every player in our data source.
  type New {
    title: String,
    short_description: String,
    permantlink: String,
    date: String,
    news_sourse_id: String,
    user_id: String,
    category_id: String
  }

  

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "players" query returns an array of zero or more players (defined above).
  type Query {
    newsByWord(word: String, user_id: String): [New]
    newsByUser(user_id: String):[New]
    newsByCategory(user_id: String, category_id: String):[New]
    version: String
  }
`;