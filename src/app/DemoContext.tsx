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
import { loyaltyStatus } from '@/mock-data/loyalty';
import { totalChapters } from './chapters';

/** Selectable app-user profiles for the different home experiences. */
export type AppUser = 1 | 2 | 3 | 4;

interface DemoContextValue {
  /** Current chapter (1-6). */
  chapter: number;
  goToChapter: (id: number) => void;
  nextChapter: () => void;
  prevChapter: () => void;

  /**
   * Fixed persona used by the decisioning mock. The card is always linked
   * in this build, so this is constant.
   */
  persona: PersonaState;
  user: User;
  isLinked: boolean;
  loyalty: LoyaltyStatus;

  /** Selected app-user profile (placeholder for home experience variants). */
  appUser: AppUser;
  setAppUser: (u: AppUser) => void;

  /** Decision animation replay token — bump to re-trigger animations. */
  replayToken: number;
  replayDecision: () => void;

  /** Presenter panel visibility (hidden by default; reveal with "P"). */
  presenterOpen: boolean;
  setPresenterOpen: (open: boolean) => void;
  togglePresenter: () => void;

  /** Presenter-only "Behind the scenes" decisioning view. */
  behindOpen: boolean;
  setBehindOpen: (open: boolean) => void;
  toggleBehind: () => void;

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
  const [appUser, setAppUser] = useState<AppUser>(1);
  const [replayToken, setReplayToken] = useState(0);
  const [presenterOpen, setPresenterOpen] = useState(false);
  const [behindOpen, setBehindOpen] = useState(false);
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

  const replayDecision = useCallback(() => setReplayToken((t) => t + 1), []);

  const acceptOffer = useCallback(() => setOfferAccepted(true), []);
  const resetOffer = useCallback(() => setOfferAccepted(false), []);
  const togglePresenter = useCallback(() => setPresenterOpen((o) => !o), []);
  const toggleBehind = useCallback(() => setBehindOpen((o) => !o), []);

  const resetDemo = useCallback(() => {
    setChapter(1);
    setAppUser(1);
    setReplayToken((t) => t + 1);
    setOfferAccepted(false);
  }, []);

  // The card is always connected in this build.
  const persona: PersonaState = 'linked';
  const isLinked = true;

  const user = useMemo<User>(
    () => ({
      ...hanako,
      linkedHappyProgram: true,
    }),
    [],
  );

  const loyalty = loyaltyStatus;

  const value: DemoContextValue = {
    chapter,
    goToChapter,
    nextChapter,
    prevChapter,
    persona,
    user,
    isLinked,
    loyalty,
    appUser,
    setAppUser,
    replayToken,
    replayDecision,
    presenterOpen,
    setPresenterOpen,
    togglePresenter,
    behindOpen,
    setBehindOpen,
    toggleBehind,
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
