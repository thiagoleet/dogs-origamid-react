import React from "react";
import useFetch from "@hooks/useFetch";
import api from "@util/api";
import Loading from "@components/UI/helpers/Loading/Loading";
import Error from "@components/UI/helpers/Error";
const UserStatsGraphs = React.lazy(() =>
  import("./components/UserStatsGraphs")
);

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = api.STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error>{error}</Error>;

  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <section className="container">
          <UserStatsGraphs data={data} />
        </section>
      </React.Suspense>
    );
};

export default UserStats;
