import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: 'https://api-sa-east-1.graphcms.com/v2/cl4p0278u1ew401yw40q7cm8n/master',
	cache: new InMemoryCache()
});