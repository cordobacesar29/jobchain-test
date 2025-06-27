export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const paramsId = (await params).productId
  return( <h1>details {paramsId}</h1>);
}
