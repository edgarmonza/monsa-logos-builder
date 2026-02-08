import { create } from 'zustand';

export const ONBOARDING_STEPS = [
  { id: 1, name: 'industry', title: 'Pick your industry', skippable: false },
  { id: 2, name: 'inspiration', title: 'Pick some logos you like', skippable: true },
  { id: 3, name: 'colors', title: 'Pick some colors you like', skippable: true },
  { id: 4, name: 'company', title: 'Enter your company name', skippable: false },
  { id: 5, name: 'symbols', title: 'Pick some symbol types', skippable: true },
  ] as const;

interface OnboardingState {
    currentStep: number;
    totalSteps: number;
    industry: string;
    likedLogoStyles: string[];
    selectedColors: string[];
    companyName: string;
    slogan: string;
    selectedSymbolTags: string[];
    isComplete: boolean;
    setIndustry: (industry: string) => void;
    toggleLogoStyle: (styleId: string) => void;
    toggleColor: (color: string) => void;
    setCompanyName: (name: string) => void;
    setSlogan: (slogan: string) => void;
    toggleSymbolTag: (tag: string) => void;
    nextStep: () => void;
    prevStep: () => void;
    skipStep: () => void;
    reset: () => void;
}

export const useOnboardingStore = create<OnboardingState>((set, get) => ({
    currentStep: 1,
    totalSteps: 5,
    industry: '',
    likedLogoStyles: [],
    selectedColors: [],
    companyName: '',
    slogan: '',
    selectedSymbolTags: [],
    isComplete: false,

    setIndustry: (industry) => set({ industry }),

    toggleLogoStyle: (styleId) =>
          set((s) => ({
                  likedLogoStyles: s.likedLogoStyles.includes(styleId)
                    ? s.likedLogoStyles.filter((id) => id !== styleId)
                            : [...s.likedLogoStyles, styleId],
          })),

    toggleColor: (color) =>
          set((s) => ({
                  selectedColors: s.selectedColors.includes(color)
                    ? s.selectedColors.filter((c) => c !== color)
                            : [...s.selectedColors, color],
          })),

    setCompanyName: (companyName) => set({ companyName }),
    setSlogan: (slogan) => set({ slogan }),

    toggleSymbolTag: (tag) =>
          set((s) => ({
                  selectedSymbolTags: s.selectedSymbolTags.includes(tag)
                    ? s.selectedSymbolTags.filter((t) => t !== tag)
                            : [...s.selectedSymbolTags, tag],
          })),

    nextStep: () =>
          set((s) => ({
                  currentStep: Math.min(s.currentStep + 1, s.totalSteps),
                  isComplete: s.currentStep === s.totalSteps,
          })),

    prevStep: () =>
          set((s) => ({ currentStep: Math.max(s.currentStep - 1, 1) })),

    skipStep: () => get().nextStep(),

    reset: () =>
          set({
                  currentStep: 1, industry: '', likedLogoStyles: [],
                  selectedColors: [], companyName: '', slogan: '',
                  selectedSymbolTags: [], isComplete: false,
          }),
}));

export const COLOR_OPTIONS = [
  { name: 'Blue', gradient: ['#3B82F6', '#1D4ED8'] },
  { name: 'Purple', gradient: ['#8B5CF6', '#6D28D9'] },
  { name: 'Pink', gradient: ['#EC4899', '#BE185D'] },
  { name: 'Red', gradient: ['#EF4444', '#B91C1C'] },
  { name: 'Orange', gradient: ['#F97316', '#C2410C'] },
  { name: 'Yellow', gradient: ['#EAB308', '#A16207'] },
  { name: 'Green', gradient: ['#22C55E', '#15803D'] },
  { name: 'Teal', gradient: ['#14B8A6', '#0F766E'] },
  { name: 'Greyscale', gradient: ['#6B7280', '#374151'] },
  ];
