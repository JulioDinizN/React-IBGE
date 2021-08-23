import { useSelector, useDispatch } from "react-redux";
import { getUfData } from "../redux/selectors";
import { useEffect } from "react";
import { apiGetStates } from "../services/apiService";
import { fetchStatesData, setSelectedUf } from "../redux/actions";

export default function SelectState() {
  const ufData = useSelector(getUfData);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getApiData() {
      try {
        const states = await apiGetStates();
        dispatch(fetchStatesData(states));
      } catch (error) {
        console.log(error.message);
      }
    }
    getApiData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSelectChange(e) {
    dispatch(setSelectedUf(e.target.value));
  }

  return (
    <div>
      <div>
        {
          ufData?.length > 0 ? (
            <div className="custom-select">
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
                name="Select States"
                onChange={handleSelectChange}
                defaultValue="zero"
              >
                <option value="zero" disabled>
                  Escolha um Estado
                </option>

                {ufData?.map((item, id) => {
                  return (
                    <option value={item.id} key={id}>
                      {item.nome}
                    </option>
                  );
                })}
              </select>
            </div>
          ) : null
          // <h2> loading all uf</h2>
        }
      </div>
    </div>
  );
}
