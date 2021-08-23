import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedTown,
  setTownData,
  setTownsOfState,
} from "../redux/actions";
import { getSelectedUf, getTownsOfState } from "../redux/selectors";
import { apiGetTowns } from "../services/apiService";

export default function SelectState() {
  const selectedUf = useSelector(getSelectedUf);
  const townsOfState = useSelector(getTownsOfState);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getApiTowns() {
      try {
        const towns = await apiGetTowns(selectedUf);
        dispatch(setTownsOfState(towns));
      } catch (error) {
        console.log(error.message);
      }
    }
    dispatch(setTownData([]));
    dispatch(setTownsOfState([]));
    getApiTowns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUf]);

  function handleTownSelectChange(e) {
    dispatch(setSelectedTown(e.target.value));
  }

  return (
    <div>
      <div>
        {
          townsOfState?.length > 0 ? (
            <div className="custom-select" style={{ marginLeft: "50px" }}>
              <span className="arrow active">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                </svg>
              </span>
              <select
                name="selectedTown"
                onChange={handleTownSelectChange}
                defaultValue="zero"
              >
                <option value="zero" disabled>
                  Escolha um Municipio
                </option>

                {townsOfState?.map((item, id) => {
                  return (
                    <option value={item.id} key={id}>
                      {item.nome}
                    </option>
                  );
                })}
              </select>
            </div>
          ) : null
          // <h2> loading</h2>
        }
      </div>
    </div>
  );
}
