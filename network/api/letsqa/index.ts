import { post } from "../..";


const ENDPOINT = "https://api.flowboard.skyrockets.space";
const LETS_QA_ENDPOINT = "https://api.letsqa.fun";
export const getAllUserApi = async ({
    token,
    raw: r,
  }: {
    token: string;
    raw: {
      client_id: string;
      secret_key: string;
      page: any;
      limit: any;
      search_input: string;
      orderBy: string;
    };
  }) => {
    const raw = new URLSearchParams();
    raw.append("client_id", r.client_id);
    raw.append("secret_key", r.secret_key);
    raw.append("page", r.page);
    raw.append("limit", r.limit);
    raw.append("search_input", r.search_input);
    raw.append("orderBy", r.orderBy);
  
    return post({
      route: `/api/admin/getAllUser`,
      data: raw,
      config: {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
      endpoint: LETS_QA_ENDPOINT,
    });
  };