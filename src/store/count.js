import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCounter = create(persist((set) => ({
    value: 5,
    increment: () => set((state) => ({ value: state.value + 1 })),
    decrement: () => set((state) => ({ value: state.value - 1 })),
    reset: () => set({ value: 0 }),
})))


export default useCounter;




//document=========================================
// useBear aita customize kore useCount dise aita ke cutomize hook bole
// const useBear = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),

// }))