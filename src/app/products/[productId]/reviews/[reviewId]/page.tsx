interface PromiseProps {
  productId: string;
  reviewId: string;
}
export default async function name({
  params,
}: {
  params: Promise<PromiseProps>;
}) {
  const {productId, reviewId} = await params
  return (
    <h1>review {reviewId} for product {productId}</h1>
  )
}
