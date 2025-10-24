\version "2.22.1"
\include "predefined-guitar-fretboards.ly"

\header {
  title = "Don't forget the little sister"
  subtitle = "Cnot 1.7 main theme"
  composer = "Alice"
  tagline = \markup {
    
    \center-column {
      \epsfile #Y #15 # "edizionitradizionali.eps"
      \tiny \line {
      "© 2025 Edizioni Tradizionali — "
      "CC BY 4.0 — "
      \with-url #"https://creativecommons.org/licenses/by/4.0/" "creativecommons.org/licenses/by/4.0"
      }
      \small \line { \with-url #"https://github.com/francescosisini/Cnot-Franchise" "https://github.com/francescosisini/Cnot-Franchise" }
      \tiny \line {
      "Testo rifinito con ChatGPT, audio Suno, trascrizione e arrangiamento degli autori."
    }
      \small \italic "Music engraving by LilyPond"
      
    }
    
  }
}

license = \markup {
  \center-column {
    \small "© 2025 Edizioni Tradizionali — Creative Commons Attribution 4.0 International (CC BY 4.0)"
    \small "Ideated and arranged by the authors of Edizioni Tradizionali."
    \small "Lyrics refined with ChatGPT, audio generated with Suno."
    \small "Composer credited to Alice — a fictional character from the Cnot 1.7 universe."
    \small \with-url #"https://creativecommons.org/licenses/by/4.0/"
           "https://creativecommons.org/licenses/by/4.0/"
  }
}

\paper {
  tagline = \markup {
    \tiny \line {
      "© 2025 Edizioni Tradizionali — "
      "CC BY 4.0 — "
      \with-url #"https://creativecommons.org/licenses/by/4.0/" "creativecommons.org/licenses/by/4.0"
      " — Testo rifinito con ChatGPT, audio Suno, trascrizione e arrangiamento degli autori."
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
      #:factor (/ staff-height pt 23)
    ))
}

global = { \key g \major \time 4/4 }

% --- SEZIONI ---

testo = \lyricmode {
  she leaves and I stay
  like a fol -- der left op -- en
  half full hal -- f eased I blinck and she's al rea -- dy gone
  She goes to NewYork
  stay with a lamp
  shape like a he -- art
  plastic lo -- ve
  
  three set -- ting warm
  cold am -- bi -- ent
  mine is blin -- king
  
  I'm not an -- gry I'm just he -- re
  in the si -- lence you left in
  the fli -- ker of fear
  
  you are a pix -- el a -- way I' -- m still near
  sing -- ing soft -- ly where you won't hear
  
}

% Accordi: una misura ciascuno (allineati alle 8 misure dell'arpeggio)
accordi = \chordmode {
  g1 g1 d1/a d1 e:m9 1 e1:m9  c1:9  g1 g d d e:m9 e:m9 c:9 g:maj7
  g/b g d d c:maj7-9 c:maj7-9 c:maj7-9 c:maj7-9 c:maj7-9 c:maj7-9
   g d b:m7 d c:maj7-9 c:maj7-9 c:maj7-9 c:maj7-9 
   g d  b:m7 d c:maj7-9 c:maj7-9 c:maj7-9
}

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
  r2  <d g  d'>2 | % G
  \tuplet 3/2 {d'4 g, d} \tuplet 3/2 {d'4 g, d} | % G
  \tuplet 3/2 {d'4 a d,} \tuplet 3/2 {d'4 a d,} | % D 
  \tuplet 3/2 {d'4 a d,} \tuplet 3/2 {d'4 a d,} | % D 
  \tuplet 3/2 {d'4 g, e} \tuplet 3/2 {d'4 g, e} | % em79
  \tuplet 3/2 {d'4 g, e} \tuplet 3/2 {d'4 g, e} | % em79
  \tuplet 3/2 {c'4 g e} \tuplet 3/2 {c'4 g e}   | % C9
  \tuplet 3/2 {b'4 g d} \tuplet 3/2 {b'4 g d}   | % G
  \tuplet 3/2 {<b b'>4 g' d } \tuplet 3/2 {b'4 g d}   | % G/b
  \tuplet 3/2 {<b b'>4 g' d } \tuplet 3/2 {b'4 g d}   | % G/b
  \tuplet 3/2 {d'4 a d,} \tuplet 3/2 {d'4 a d,} | %D 
  \tuplet 3/2 {d'4 a d,} \tuplet 3/2 {d'4 a d,} | %D
  \tuplet 3/2 {c'4 g e} \tuplet 3/2 {c'4 g e}   | % C9
  \tuplet 3/2 {c'4 g e} \tuplet 3/2 {c'4 g e}   | % C9
  \tuplet 3/2 {c'4 g e} \tuplet 3/2 {c'4 g e}   | % C9
  \tuplet 3/2 {c'4 g e} \tuplet 3/2 {c'4 g e}   | % C9
  \tuplet 3/2 {c'4 g e} \tuplet 3/2 {c'4 g e}   | % C9
  \tuplet 3/2 {c'4 g e} \tuplet 3/2 {c'4 g e}   | % C9
  \tuplet 3/2 {b'4 g d} \tuplet 3/2 {b'4 g d}   | % G
  \tuplet 3/2 {d'4 a d,} \tuplet 3/2 {d'4 a d,} | % D
  \tuplet 3/2 {d'4 a fis} \tuplet 3/2 {d'4 a fis} | % Bm7
  \tuplet 3/2 {d'4 a d,} \tuplet 3/2 {d'4 a d,} | % D
  \tuplet 3/2 {<c c'>4 g' e} \tuplet 3/2 {c'4 g e}   | % C9
  \tuplet 3/2 {<b c'>4 g' e} \tuplet 3/2 {c'4 g e}   | % C9
  \tuplet 3/2 {<a, c'>4 g' e} \tuplet 3/2 {c'4 g e}   | % C9
  \tuplet 3/2 {<e, c''>4 g' e} \tuplet 3/2 {c'4 g e}   | % C9
  \tuplet 3/2 {b'4 g d} \tuplet 3/2 {b'4 g d}   | % G
  \tuplet 3/2 {d'4 a d,} \tuplet 3/2 {d'4 a d,} | % D
  \tuplet 3/2 {d'4 a fis} \tuplet 3/2 {d'4 a fis} | % Bm7
  \tuplet 3/2 {d'4 a d,} \tuplet 3/2 {d'4 a d,} | % D
  \tuplet 3/2 {<c c'>4 g' e} \tuplet 3/2 {c'4 g e}   | % C9
  \tuplet 3/2 {<b c'>4 g' e} \tuplet 3/2 {c'4 g e}   | % C9
  \tuplet 3/2 {<a, c'>4 g' e} \tuplet 3/2 {c'4 g e}   | % C9
}

melodiaVoce = \relative c'' {
  \global
  r1 | r1 | r1 | r1 | r1 | r1 |
  r4 r4 r4 r8 b8 |
  g'4 b,8 b4 b4. |
  r1|r8 d8 d8 g8 g4 d4|
  a4 a4 r2|
  r4 r8 d4 d4 d8|
  c8 b4. r4 r8 g
  g4 r8 g8 g4 r8 g8|
  r4 c8 c8 b4 r4 | %ready gone
  r8 d4. g4 b,8 b8(| % she goes to New york
  b4) r4 r2|
  r8 g'4  a8 fis8 d4.|
   c4 c4 b8 b8 a4|
   r4 d4 c8 b r4|
  r4 r4 d4 d8 c8|
  b4 r4 r4 r8 c8( |
  c8) c4 c8 c4   b4( |
  c8) b4 a8 g4 r4|
  r2 r4 r8 d8(|   % I
  d8) g4. g4 g4( |	  % 'm not angry	
  g4) a2 b4 | % I'm just 
  b4 fis4 r2| % here
  r1|
  \tuplet 3/2{g8 g d'(}d4) \tuplet 3/2{b8 b b} a4| % in the silence..
  g4 a4 g4 e4 | % in the fliker of fear..
  g4( g4) r2 |
  r1|
  \tuplet 3/2{d8 c b} d4 g4 g|
  a4 b b b|
  b4( a) r2|
  r2 r4 d8 d8|
  d2 b2|
  a2 g4 fis4(|
  fis4) g4 r2|
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
