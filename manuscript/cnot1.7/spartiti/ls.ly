\version "2.22.1"
\include "predefined-guitar-fretboards.ly"

\header {
  title = "Don't forget the little sister"
  subtitle = "Cnot 1.7 main theme"
  composer = "Alice"
  tagline = \markup {
    \center-column {
      \epsfile #Y #15 # "edizionitradizionali.eps"
      \small \italic "Edizioni Tradizionali – Ferrara. Music engraving by LilyPond"
      \small \line { \with-url #"https://github.com/francescosisini/Cnot-Franchise" "https://github.com/francescosisini/Cnot-Franchise" }
    }
  }
}

\paper {
  oddHeaderMarkup = \markup {
    \fill-line { \null \epsfile #Y #8 #"qrcode.eps" }  % header dx
  }
}
\paper {
  #(define fonts
    (set-global-fonts
      #:music "emmentaler"
      #:brace "emmentaler"
      #:factor (/ staff-height pt 22)
    ))
}

global = { \key g \major \time 4/4 }

% --- SEZIONI ---

arpeggioChitarra = \relative g' {
  \global
  % 8 misure (G, G, D/A, D, Em9, Em9, C9, G) – arpeggio a ottavi
  g,8 d' g, d' g, d' g, b | % G
  g8 d' g, d' g, d' g, a | % G (var)
  a8 d a d a d a g | % D/A  (basso A)
  g8 d' g, e' g, fis' g, a | % D    (variante melodica)
  g8 d' g, d' g, d' g, b | % Em9
  g8 d' g, d' g, d' g, c | % Em9 (var)
  <c, e b' d>2  r4 r4 | % C9
  r1 | % G
  \tuplet 3/2 {d'4 g, d} \tuplet 3/2 {d'4 g, d} | %G
  \tuplet 3/2 {d'4 a, d} \tuplet 3/2 {d'4 a, d} | %D 
  \tuplet 3/2 {d'4 a, d} \tuplet 3/2 {d'4 a, d} | %D 
}

melodiaVoce = \relative c'' {
  \global
  r1 | r1 | r1 | r1 | r1 | r1 |
  r4 r4 r4 r8 b8 |
  g'4 b,8 b4 b4. |
  r1|r8 d8 d8 g8 g4 d4|
  a4 a4 r2|
}

testo = \lyricmode {
  she leaves and I stay
  like a folder left open
}

% Accordi: una misura ciascuno (allineati alle 8 misure dell'arpeggio)
accordi = \chordmode {
  g1 g1 d1/a d1 e:m9 1 e1:m9  c1:9  g1 g d
}



\score {
  <<
    
    \new ChordNames \with {
  midiInstrument = "acoustic grand"
  midiMinimumVolume = #0.0
  midiMaximumVolume = #0.0
} { \accordi }

    
    % --- Nomi degli accordi ---
   % \new ChordNames  {\set chordChanges = ##f  \accordi }

    % --- (facoltativo) Diagrammi chitarra allineati agli accordi ---
    % \new FretBoards { \accordi }

  
\new Staff \with {
  instrumentName = "Voce"
  midiInstrument = "voice oohs"
  \override DynamicTextSpanner.staff-padding = #3
} <<
  \new Voice = "voce" {
    \dynamicUp
    \set Staff.midiMinimumVolume = #0.7
    \set Staff.midiMaximumVolume = #1.0
    \melodiaVoce
  }
>>


    % --- Staff VOCE ---
   % \new Staff <<
    %  \new Voice = "voce" {
    %    \mark \markup \box "Sospirata"

     %   \melodiaVoce
    %  }
   % >>

    % --- LYRICS legate alla Voice "voce" ---
    \new Lyrics \lyricsto "voce" { \testo }

    % --- Staff CHITARRA (standard) con arpeggio ---
    \new Staff \with {
      instrumentName = "Chitarra"
      midiInstrument = "acoustic guitar (nylon)"
    } {
     \clef "treble_8"
      \arpeggioChitarra
    }

    % --- Tabulatura CHITARRA (stesso arpeggio) ---
    \new TabStaff \with {
      stringTunings = #guitar-tuning
    } {
      \arpeggioChitarra
    }
  >>
  \layout { }
  \midi { \tempo 4 = 112 }
}
