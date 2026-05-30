-- Filtra gli elementi Math (sia inline che display)
function Math(el)
  local s = el.text
  local changed = false
  s, n = s:gsub("\\ket%s*%{([^}]+)%}", function(x)
      changed = true
      return "|"..x.."⟩"
  end)
  s, n2 = s:gsub("\\not\\equiv", "\\neq")
  if changed or n2 > 0 then
    return pandoc.Math(el.mathtype or "InlineMath", s)
  else
    return el
  end
end

-- Filtra i blocchi raw in formato TeX
function RawBlock(el)
  if el.format == "tex" then
    local s = el.text
    local changed = false
    s, n = s:gsub("\\ket%s*%{([^}]+)%}", function(x)
        changed = true
        return "|"..x.."⟩"
    end)
    s, n2 = s:gsub("\\not\\equiv", "\\neq")
    if changed or n2 > 0 then
      return pandoc.RawBlock("tex", s)
    else
      return el
    end
  else
    return el
  end
end

-- Filtra gli inline raw in formato TeX
function RawInline(el)
  if el.format == "tex" then
    local s = el.text
    local changed = false
    s, n = s:gsub("\\ket%s*%{([^}]+)%}", function(x)
        changed = true
        return "|"..x.."⟩"
    end)
    s, n2 = s:gsub("\\not\\equiv", "\\neq")
    if changed or n2 > 0 then
      return pandoc.RawInline("tex", s)
    else
      return el
    end
  else
    return el
  end
end

return {
  {
      Math = Math,
      RawBlock = RawBlock,
      RawInline = RawInline
  }
}