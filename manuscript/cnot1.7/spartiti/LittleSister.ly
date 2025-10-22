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
      \small "https://github.com/francescosisini/Cnot-Franchise"
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


%\header { title = "Hip Hip Urrà" composer = "Gli amici della Terra" }
global = { \key G \major \time 4/4 }

% --- SEZIONI (senza repeat qui) ---



arpeggioChitarra = \relative c' {
  g8 d g d g d g b | %G
  g8 d g d g d g a | %G
  a8 d a d a d a b | %D
  g8 d g e g f g a | %D
  g8 d g d g d g b | %Em9
  g8 d g d g d g a | %Em9
  g8 c g c g b g d | %C9
  g8 e g e g e g b | %G
}

melodiaVoce = relative c' {
 r1|r1|r1|r1|r1|r1|
 r4 r4 r8 e8 e4|
 g4 b8 b8 b4 b4|
  
}

testo = \lyricmode {
  she leaves and I stay
}









accordiRefrain  = \chordmode { g4 | g4 | }   % 2 misure


\score {
  <<
     
    % --- ACCORDI (timeline identica allo Staff) ---
    \new ChordNames {
   
    \set chordChanges = ##f
      \repeat volta 2 \accordiRefrain 
      \accordiVersoA                       
      \repeat volta 2 \accordiRefrain 
      \accordiRitornello
      \accordiRefrain 
      \accordiVersoB                       
      \repeat volta 2 \accordiRefrain
      \accordiRitornello
      \repeat volta 2 \accordiRefrain
    }

    % --- (facoltativo) diagrammi chitarra allineati ---
    %\new FretBoards {
     % \repeat volta 2 { \accordiRefrain }
      %\accordiVersoA }

    % --- STAFF: una sola Voice che contiene tutto in sequenza ---
    \new Staff <<
      \new Voice = "voce" {
        \mark \markup \box "Refrain ×2 (2ª volta senza testo)"
	\repeat volta 2 \melRefrainStart
        
	\bar "|"
        \melVersoA
	\repeat volta 2 \melRefrain
		
	%\bar "|."

	\melRitornello

	%\repeat volta 1
	\melRefrain
	
	\melVersoB

	\repeat volta 2 \melRefrain

	\melRitornello

	\repeat volta 2 \melRefrain
      }
    >>

    % --- LYRICS agganciate alla Voice "voce" ---
    % Refrain appare solo alla 1ª volta; la 2ª resta muta (come desideri)
    \new Lyrics \lyricsto "voce"
    { 
      \global
      \testoRefrain
      
      \testoVersoA

      \testoRefrain
       
      
      \testoRitornello
      

      \pausaRefrain
      %\testoRefrain
      \testoVersoB

      \testoRefrain

      \testoRitornello

      \testoRefrain 
    } 
  >>
  \layout{}
  \midi { \tempo 4=130 }
}
