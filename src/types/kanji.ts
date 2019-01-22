export interface IKanji {
  id: number;
  character: string;
  meaning: { english: string[] };
  kunyomi: string[];
  onyomi: string[];
}

export interface IStateKanjis {
  isPending: boolean;
  kanjis: Array<{
    id: number;
    character: string;
    meaning: { english: string[] };
    kunyomi: string[];
    onyomi: string[];
  }>;
  error: string;
}

export interface IStateSearch {
  searchField: string;
}
