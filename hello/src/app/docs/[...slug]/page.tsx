export default function DocsPage({ params }: { params: { slug: string[] } }) {
    const { slug } = params;
  
    return (
      <div>
        <h1>Docs Page</h1>
        <p>Slug: {slug ? slug.join('/') : 'No slug provided'}</p>
      </div>
    );
  }