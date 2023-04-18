import { useQuery } from "@tanstack/react-query";

export const useGetPassword = (type: string, headers: any) => {
  const { data, refetch } = useQuery(["pwd"], async () => {
    return fetch(`http://localhost:3000/generate/${type}`, {
      headers: headers,
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((json) => {
        return json[type];
      });
  });

  return { data, refetch };
};
