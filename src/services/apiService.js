import getData from "./httpService";

export async function apiGetStates() {
  const allStates = await getData("/api/v1/localidades/estados?orderBy=nome");
  return allStates;
}

export async function apiGetTowns(state) {
  const allTowns = await getData(
    `/api/v1/localidades/estados/${state}/municipios?orderBy=nome`
  );
  return allTowns;
}

export async function apiGetDataTowns(town) {
  const allTownData = await getData(
    `/api/v1/localidades/municipios/${town}/distritos`
  );
  return allTownData;
}
