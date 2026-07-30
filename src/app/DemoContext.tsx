import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { PersonaState, User, LoyaltyStatus } from '@/types';
import { hanako } from '@/mock-data/users';
import { loyaltyStatus, underEngagedStatus } from '@/mock-data/loyalty';
import { totalChapters } from './chapters';

interface DemoContextValue {
  /** Current chapter (1-10). */
  chapter: number;
  goToChapter: (id: number) => void;
  nextChapter: () => void;
  prevChapter: () => void;

  /** Persona state and derived data. */
  persona: PersonaState;
  setPersona: (p: PersonaState) => void;
  user: User;
  isLinked: boolean;
  loyalty: LoyaltyStatus;

  /** Decision animation replay token — bump to re-trigger animations. */
  replayToken: number;
  replayDecision: () => void;

  /** Explanation drawer visibility. */
  explanationOpen: boolean;
  toggleExplanation: () => void;
  setExplanationOpen: (open: boolean) => void;

  /** Presenter panel visibility (hidden by default; reveal with "P"). */
  presenterOpen: boolean;
  setPresenterOpen: (open: boolean) => void;
  togglePresenter: () => void;

  /** Presenter-only "Behind the scenes" decisioning view. */
  behindOpen: boolean;
  setBehindOpen: (open: boolean) => void;
  toggleBehind: () => void;

  /** Whether the demo persona has linked during this session. */
  hasActivated: boolean;
  activate: () => void;

  /** Whether the winning offer has been accepted (CTA). */
  offerAccepted: boolean;
  acceptOffer: () => void;
  resetOffer: () => void;

  /** Reset the whole demo back to its initial state. */
  resetDemo: () => void;
}

const DemoContext = createContext<DemoContextValue | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [chapter, setChapter] = useState(1);
  const [persona, setPersonaState] = useState<PersonaState>('notLinked');
  const [replayToken, setReplayToken] = useState(0);
  const [explanationOpen, setExplanationOpen] = useState(false);
  const [presenterOpen, setPresenterOpen] = useState(false);
  const [behindOpen, setBehindOpen] = useState(false);
  const [hasActivated, setHasActivated] = useState(false);
  const [offerAccepted, setOfferAccepted] = useState(false);

  const goToChapter = useCallback((id: number) => {
    setChapter(Math.min(Math.max(1, id), totalChapters));
  }, []);

  const nextChapter = useCallback(
    () => setChapter((c) => Math.min(c + 1, totalChapters)),
    [],
  );
  const prevChapter = useCallback(
    () => setChapter((c) => Math.max(c - 1, 1)),
    [],
  );

  const setPersona = useCallback((p: PersonaState) => {
    setPersonaState(p);
    if (p === 'linked' || p === 'underEngaged') setHasActivated(true);
    if (p === 'notLinked') setHasActivated(false);
  }, []);

  const replayDecision = useCallback(() => setReplayToken((t) => t + 1), []);
  const toggleExplanation = useCallback(
    () => setExplanationOpen((o) => !o),
    [],
  );

  const activate = useCallback(() => {
    setHasActivated(true);
    setPersonaState('linked');
  }, []);

  const acceptOffer = useCallback(() => setOfferAccepted(true), []);
  const resetOffer = useCallback(() => setOfferAccepted(false), []);
  const togglePresenter = useCallback(() => setPresenterOpen((o) => !o), []);
  const toggleBehind = useCallback(() => setBehindOpen((o) => !o), []);

  const resetDemo = useCallback(() => {
    setChapter(1);
    setPersonaState('notLinked');
    setReplayToken((t) => t + 1);
    setExplanationOpen(false);
    setHasActivated(false);
    setOfferAccepted(false);
  }, []);

  const isLinked = persona !== 'notLinked' || hasActivated;

  const user = useMemo<User>(
    () => ({
      ...hanako,
      linkedHappyProgram: isLinked,
    }),
    [isLinked],
  );

  const loyalty = persona === 'underEngaged' ? underEngagedStatus : loyaltyStatus;

  const value: DemoContextValue = {
    chapter,
    goToChapter,
    nextChapter,
    prevChapter,
    persona,
    setPersona,
    user,
    isLinked,
    loyalty,
    replayToken,
    replayDecision,
    explanationOpen,
    toggleExplanation,
    setExplanationOpen,
    presenterOpen,
    setPresenterOpen,
    togglePresenter,
    behindOpen,
    setBehindOpen,
    toggleBehind,
    hasActivated,
    activate,
    offerAccepted,
    acceptOffer,
    resetOffer,
    resetDemo,
  };

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDemo(): DemoContextValue {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error('useDemo must be used within a DemoProvider');
  return ctx;
}
