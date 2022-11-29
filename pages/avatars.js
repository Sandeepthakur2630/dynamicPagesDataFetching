import { getAllUserApi } from "../network/api/letsqa";
import React, { useState, useEffect } from "react";

export default function Avatars({ avatar }) {
  const [queries, setQueries] = useState({ search: "", count: 1, current: 0 });
  const [limit, setLimit] = useState(10);
  const [trial, setTial] = useState([]);

  // console.log(trial.data);
  // let trial;
  // useEffect(() => {
  //   console.log("+++++++++++++++",  trial);
  // }, [trial])

  const client_id = "1efffa42c8316645aa99eb3830b9e408";
  const secret_key = "sc_1507cfcdedbc623157d24b35f39dadc4";
  useEffect(() => {
    const userDetails = async () => {
      try {
        const res = await getAllUserApi({
          raw: {
            client_id,
            secret_key,
            page: queries.count,
            limit: limit,
            search_input: queries.search,
            orderBy: "desc",
          },
          token: "",
        });

        const data = res.data.map((item) => {
          return item;
        });
        setTial([...data]);
        // setTial(res);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    userDetails();
  }, []);
  console.log("hello ", trial);
  return (
    <>
      <div>
        <h1>All the avatars are:</h1>
      </div>
      <ul>
        {avatar.map((avatar) => {
          return <li key={avatar._id}>{avatar.name}</li>;
        })}
      </ul>
      {/* {(trial.data).map((s) => {
        // <div>=========={s.country} ==================</div>;
      return (<div>fdh</div>);
      
      })} */}
      <h1>{trial.name}</h1>
      <div>{JSON.stringify(avatar)}</div>
    </>
  );
}

export async function getStaticProps() {
  const avatar = await fetch(
    "https://last-airbender-api.herokuapp.com/api/v1/characters/avatar"
  ).then((r) => r.json());

  return {
    props: {
      avatar,
    },
  };
}
