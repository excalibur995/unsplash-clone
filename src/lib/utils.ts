interface CreateParamsProps {
  url: string;
  params: Record<string, any>;
}

export async function createParams(data: CreateParamsProps) {
  const sendParams = new URL(data.url);
  Object.keys(data.params).forEach((key) => {
    const objKey = key;
    return sendParams.searchParams.append(objKey, String(data.params[objKey]));
  });
  return sendParams;
}
