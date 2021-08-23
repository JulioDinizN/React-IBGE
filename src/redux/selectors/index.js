export function getUfData(state) {
  return state.fetchedUfs.ufs;
}

export function getSelectedUf(state) {
  return state.selectedUf.selectedUf;
}

export function getTownsOfState(state) {
  return state.townsOfState.towns;
}

export function getSelectedTown(state) {
  return state.selectedTown.selectedTown;
}

export function getTownData(state) {
  return state.townData.townData;
}
