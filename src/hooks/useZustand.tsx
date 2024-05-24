import {ModalProps} from "@/types/zustand";
import {create} from "zustand";

// worker
export const useCreateWorkerModal = create<ModalProps>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));

export const useEditWorkerModal = create<ModalProps>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}))

// admin
export const useCreateAdminModal = create<ModalProps>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));

export const useEditAdminModal = create<ModalProps>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}))

// role
export const useCreateRoleModal = create<ModalProps>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}))

export const useEditRoleModal = create<ModalProps>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}))

// assignment
export const useAssignWorkerModal = create<ModalProps>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}))

// filter orders
export const useFilterOrdersModal = create<ModalProps>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}))

interface FilterOrderState {
    isFiltered: boolean,
    report_id?: number | undefined;
    wo_number?: string;
    status?: string;
    address?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    setReportId?: (reportId: number) => void;
    setWoNumber?: (woNumber: string) => void;
    setStatus?: (status: string) => void;
    setAddress?: (address: string) => void;
    setCity?: (city: string) => void;
    setState?: (state: string) => void;
    setZipCode?: (zip_code: string) => void;
    setIsFiltered?: (isFiltered: boolean) => void;
}

export const useFilterOrdersStore = create<FilterOrderState>((set) => ({
    isFiltered: false,
    report_id: undefined,
    wo_number: "",
    status: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    setReportId: (reportId: number) => set({report_id: reportId}),
    setWoNumber: (woNumber: string) => set({wo_number: woNumber}),
    setStatus: (status: string) => set({status: status}),
    setAddress: (address: string) => set({address: address}),
    setCity: (city: string) => set({city: city}),
    setState: (state: string) => set({state: state}),
    setZipCode: (zip_code: string) => set({zip_code: zip_code}),
    setIsFiltered: (isFiltered: boolean) => set({isFiltered: isFiltered}),
}));

