import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTownData } from "../redux/actions";
import { getSelectedTown, getTownData } from "../redux/selectors";
import { apiGetDataTowns } from "../services/apiService";
import "../styles/CityOverview.css";

export default function CityOverview() {
  const selectedTown = useSelector(getSelectedTown);
  const townData = useSelector(getTownData);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getApiTownData() {
      try {
        const apiTown = await apiGetDataTowns(selectedTown);
        dispatch(setTownData(apiTown));
      } catch (error) {
        console.log(error.message);
      }
    }

    getApiTownData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTown]);

  return (
    <div>
      {townData?.length > 0 ? (
        <div>
          <div className="card">
            {townData[0]?.municipio ? (
              <>
                <div className="left">
                  <div className="info">
                    <div className="content">
                      <div className="title">Região</div>
                      <div className="value">
                        {
                          townData[0]?.municipio.microrregiao.mesorregiao.UF
                            .regiao.nome
                        }
                      </div>
                    </div>
                  </div>

                  <div className="info">
                    <div className="content">
                      <div className="title">Microrregião</div>
                      <div className="value">
                        {townData[0]?.municipio.microrregiao.nome}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="info">
                    <div className="content">
                      <div className="title">UF</div>
                      <div className="value">
                        {
                          townData[0]?.municipio.microrregiao.mesorregiao.UF
                            .nome
                        }
                      </div>
                    </div>
                  </div>
                  <div className="info">
                    <div className="content">
                      <div className="title">Mesorregião</div>
                      <div className="value">
                        {townData[0]?.municipio.microrregiao.mesorregiao.nome}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="info">
                <div className="content">
                  <div className="value">
                    Essa localidade não possui município 😢
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
