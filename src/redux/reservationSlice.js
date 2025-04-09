import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  reservations: [],
  isSubmitting: false,
  submitSuccess: false,
  error: null
}

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    submitReservation: (state, action) => {
      state.isSubmitting = true
      state.submitSuccess = false
      state.error = null
    },
    submitReservationSuccess: (state, action) => {
      state.reservations.push(action.payload)
      state.isSubmitting = false
      state.submitSuccess = true
    },
    submitReservationFailure: (state, action) => {
      state.isSubmitting = false
      state.error = action.payload
    },
    resetReservationForm: (state) => {
      state.isSubmitting = false
      state.submitSuccess = false
      state.error = null
    }
  }
})

export const {
  submitReservation,
  submitReservationSuccess,
  submitReservationFailure,
  resetReservationForm
} = reservationSlice.actions

// Thunk pour simuler une requête de réservation
export const createReservation = (reservationData) => {
  return async (dispatch) => {
    dispatch(submitReservation())

    try {
      // Simuler un délai de requête API
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Simuler une réponse réussie
      dispatch(submitReservationSuccess({
        id: Date.now(),
        ...reservationData,
        createdAt: new Date().toISOString()
      }))
    } catch (error) {
      dispatch(submitReservationFailure(error.message))
    }
  }
}

export default reservationSlice.reducer
