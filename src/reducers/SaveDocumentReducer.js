
const state = {
  documents: []
}

const SaveDocumentReducer = (state = state, document) => {
  return {
    documents: [...state.documents].append(document)
  }
}

export default SaveDocumentReducer

