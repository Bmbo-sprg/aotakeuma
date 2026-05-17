export const getContent = async (
  bucket: R2Bucket,
  productId: string
): Promise<R2ObjectBody | null> => {
  const object = await bucket.get(`${productId}.zip`);
  return object?.body ? object : null;
};
