import { useReducer } from "react"
import { Sub } from "../types"

interface FormState {
  inputValues: Sub
}

const INITIAL_STATE = {
  nick: '',
  subMonths: 0,
  avatar: '',
  description: ''
}

type formReducerAction = {
  type: "change_value",
  payload: {
    inputName: string,
    inputValue: string
  }
} | {
  type: "clear"
}

const formReducer = (state: FormState["inputValues"], action:formReducerAction) => {
  switch (action.type) {
    case "change_value":
      const {inputName, inputValue} = action.payload
      return {
        ...state,
        [inputName]: inputValue
      }

    case "clear":
      return INITIAL_STATE
  }
}

const useNewSubForm = () => {
  return useReducer(formReducer, INITIAL_STATE)
}

export default useNewSubForm
