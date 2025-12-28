"use client";

import { useState } from "react";
import { Row, Text, DropdownWrapper, Column, Option, Input, Icon } from "@once-ui-system/core";
import * as flags from 'country-flag-icons/react/3x2';

// Map country codes to their flag components
const getFlagComponent = (code: string) => {
  const FlagComponent = (flags as any)[code];
  return FlagComponent;
};

// Comprehensive list of countries with their phone prefixes
const countries = [
  { name: "Afghanistan", code: "AF", prefix: "+93" },
  { name: "Åland Islands", code: "AX", prefix: "+358" },
  { name: "Albania", code: "AL", prefix: "+355" },
  { name: "Algeria", code: "DZ", prefix: "+213" },
  { name: "American Samoa", code: "AS", prefix: "+1684" },
  { name: "Andorra", code: "AD", prefix: "+376" },
  { name: "Angola", code: "AO", prefix: "+244" },
  { name: "Anguilla", code: "AI", prefix: "+1264" },
  { name: "Antarctica", code: "AQ", prefix: "+672" },
  { name: "Antigua and Barbuda", code: "AG", prefix: "+1268" },
  { name: "Argentina", code: "AR", prefix: "+54" },
  { name: "Armenia", code: "AM", prefix: "+374" },
  { name: "Aruba", code: "AW", prefix: "+297" },
  { name: "Ascension Island", code: "AC", prefix: "+247" },
  { name: "Australia", code: "AU", prefix: "+61" },
  { name: "Austria", code: "AT", prefix: "+43" },
  { name: "Azerbaijan", code: "AZ", prefix: "+994" },
  { name: "Bahamas", code: "BS", prefix: "+1242" },
  { name: "Bahrain", code: "BH", prefix: "+973" },
  { name: "Bangladesh", code: "BD", prefix: "+880" },
  { name: "Barbados", code: "BB", prefix: "+1246" },
  { name: "Belarus", code: "BY", prefix: "+375" },
  { name: "Belgium", code: "BE", prefix: "+32" },
  { name: "Belize", code: "BZ", prefix: "+501" },
  { name: "Benin", code: "BJ", prefix: "+229" },
  { name: "Bermuda", code: "BM", prefix: "+1441" },
  { name: "Bhutan", code: "BT", prefix: "+975" },
  { name: "Bolivia", code: "BO", prefix: "+591" },
  { name: "Bosnia and Herzegovina", code: "BA", prefix: "+387" },
  { name: "Botswana", code: "BW", prefix: "+267" },
  { name: "Brasil", code: "BR", prefix: "+55" },
  { name: "British Indian Ocean Territory", code: "IO", prefix: "+246" },
  { name: "British Virgin Islands", code: "VG", prefix: "+1284" },
  { name: "Brunei", code: "BN", prefix: "+673" },
  { name: "Bulgaria", code: "BG", prefix: "+359" },
  { name: "Burkina Faso", code: "BF", prefix: "+226" },
  { name: "Burundi", code: "BI", prefix: "+257" },
  { name: "Cambodia", code: "KH", prefix: "+855" },
  { name: "Cameroon", code: "CM", prefix: "+237" },
  { name: "Canada", code: "CA", prefix: "+1" },
  { name: "Cape Verde", code: "CV", prefix: "+238" },
  { name: "Cayman Islands", code: "KY", prefix: "+1345" },
  { name: "Central African Republic", code: "CF", prefix: "+236" },
  { name: "Chad", code: "TD", prefix: "+235" },
  { name: "Chile", code: "CL", prefix: "+56" },
  { name: "Christmas Island", code: "CX", prefix: "+61" },
  { name: "Cocos Islands", code: "CC", prefix: "+61" },
  { name: "China", code: "CN", prefix: "+86" },
  { name: "Colombia", code: "CO", prefix: "+57" },
  { name: "Comoros", code: "KM", prefix: "+269" },
  { name: "Congo", code: "CG", prefix: "+242" },
  { name: "Congo (DRC)", code: "CD", prefix: "+243" },
  { name: "Cook Islands", code: "CK", prefix: "+682" },
  { name: "Costa Rica", code: "CR", prefix: "+506" },
  { name: "Croatia", code: "HR", prefix: "+385" },
  { name: "Cuba", code: "CU", prefix: "+53" },
  { name: "Curaçao", code: "CW", prefix: "+599" },
  { name: "Cyprus", code: "CY", prefix: "+357" },
  { name: "Czech Republic", code: "CZ", prefix: "+420" },
  { name: "Denmark", code: "DK", prefix: "+45" },
  { name: "Djibouti", code: "DJ", prefix: "+253" },
  { name: "Dominica", code: "DM", prefix: "+1767" },
  { name: "Dominican Republic", code: "DO", prefix: "+1809" },
  { name: "Ecuador", code: "EC", prefix: "+593" },
  { name: "Egypt", code: "EG", prefix: "+20" },
  { name: "El Salvador", code: "SV", prefix: "+503" },
  { name: "Equatorial Guinea", code: "GQ", prefix: "+240" },
  { name: "Eritrea", code: "ER", prefix: "+291" },
  { name: "Estonia", code: "EE", prefix: "+372" },
  { name: "Eswatini", code: "SZ", prefix: "+268" },
  { name: "Ethiopia", code: "ET", prefix: "+251" },
  { name: "Falkland Islands", code: "FK", prefix: "+500" },
  { name: "Faroe Islands", code: "FO", prefix: "+298" },
  { name: "Fiji", code: "FJ", prefix: "+679" },
  { name: "Finland", code: "FI", prefix: "+358" },
  { name: "France", code: "FR", prefix: "+33" },
  { name: "French Guiana", code: "GF", prefix: "+594" },
  { name: "French Polynesia", code: "PF", prefix: "+689" },
  { name: "Gabon", code: "GA", prefix: "+241" },
  { name: "Gambia", code: "GM", prefix: "+220" },
  { name: "Georgia", code: "GE", prefix: "+995" },
  { name: "Germany", code: "DE", prefix: "+49" },
  { name: "Ghana", code: "GH", prefix: "+233" },
  { name: "Gibraltar", code: "GI", prefix: "+350" },
  { name: "Greece", code: "GR", prefix: "+30" },
  { name: "Greenland", code: "GL", prefix: "+299" },
  { name: "Grenada", code: "GD", prefix: "+1473" },
  { name: "Guadeloupe", code: "GP", prefix: "+590" },
  { name: "Guam", code: "GU", prefix: "+1671" },
  { name: "Guatemala", code: "GT", prefix: "+502" },
  { name: "Guernsey", code: "GG", prefix: "+44" },
  { name: "Guinea", code: "GN", prefix: "+224" },
  { name: "Guinea-Bissau", code: "GW", prefix: "+245" },
  { name: "Guyana", code: "GY", prefix: "+592" },
  { name: "Haiti", code: "HT", prefix: "+509" },
  { name: "Honduras", code: "HN", prefix: "+504" },
  { name: "Hong Kong", code: "HK", prefix: "+852" },
  { name: "Hungary", code: "HU", prefix: "+36" },
  { name: "Iceland", code: "IS", prefix: "+354" },
  { name: "India", code: "IN", prefix: "+91" },
  { name: "Indonesia", code: "ID", prefix: "+62" },
  { name: "Iran", code: "IR", prefix: "+98" },
  { name: "Iraq", code: "IQ", prefix: "+964" },
  { name: "Ireland", code: "IE", prefix: "+353" },
  { name: "Isle of Man", code: "IM", prefix: "+44" },
  { name: "Israel", code: "IL", prefix: "+972" },
  { name: "Italy", code: "IT", prefix: "+39" },
  { name: "Ivory Coast", code: "CI", prefix: "+225" },
  { name: "Jamaica", code: "JM", prefix: "+1876" },
  { name: "Japan", code: "JP", prefix: "+81" },
  { name: "Jersey", code: "JE", prefix: "+44" },
  { name: "Jordan", code: "JO", prefix: "+962" },
  { name: "Kazakhstan", code: "KZ", prefix: "+7" },
  { name: "Kenya", code: "KE", prefix: "+254" },
  { name: "Kiribati", code: "KI", prefix: "+686" },
  { name: "Kosovo", code: "XK", prefix: "+383" },
  { name: "Kuwait", code: "KW", prefix: "+965" },
  { name: "Kyrgyzstan", code: "KG", prefix: "+996" },
  { name: "Laos", code: "LA", prefix: "+856" },
  { name: "Latvia", code: "LV", prefix: "+371" },
  { name: "Lebanon", code: "LB", prefix: "+961" },
  { name: "Lesotho", code: "LS", prefix: "+266" },
  { name: "Liberia", code: "LR", prefix: "+231" },
  { name: "Libya", code: "LY", prefix: "+218" },
  { name: "Liechtenstein", code: "LI", prefix: "+423" },
  { name: "Lithuania", code: "LT", prefix: "+370" },
  { name: "Luxembourg", code: "LU", prefix: "+352" },
  { name: "Macau", code: "MO", prefix: "+853" },
  { name: "Madagascar", code: "MG", prefix: "+261" },
  { name: "Malawi", code: "MW", prefix: "+265" },
  { name: "Malaysia", code: "MY", prefix: "+60" },
  { name: "Maldives", code: "MV", prefix: "+960" },
  { name: "Mali", code: "ML", prefix: "+223" },
  { name: "Malta", code: "MT", prefix: "+356" },
  { name: "Marshall Islands", code: "MH", prefix: "+692" },
  { name: "Martinique", code: "MQ", prefix: "+596" },
  { name: "Mauritania", code: "MR", prefix: "+222" },
  { name: "Mauritius", code: "MU", prefix: "+230" },
  { name: "Mayotte", code: "YT", prefix: "+262" },
  { name: "Mexico", code: "MX", prefix: "+52" },
  { name: "Micronesia", code: "FM", prefix: "+691" },
  { name: "Moldova", code: "MD", prefix: "+373" },
  { name: "Monaco", code: "MC", prefix: "+377" },
  { name: "Mongolia", code: "MN", prefix: "+976" },
  { name: "Montenegro", code: "ME", prefix: "+382" },
  { name: "Montserrat", code: "MS", prefix: "+1664" },
  { name: "Morocco", code: "MA", prefix: "+212" },
  { name: "Mozambique", code: "MZ", prefix: "+258" },
  { name: "Myanmar", code: "MM", prefix: "+95" },
  { name: "Namibia", code: "NA", prefix: "+264" },
  { name: "Nauru", code: "NR", prefix: "+674" },
  { name: "Nepal", code: "NP", prefix: "+977" },
  { name: "Netherlands", code: "NL", prefix: "+31" },
  { name: "Netherlands Antilles", code: "AN", prefix: "+599" },
  { name: "New Caledonia", code: "NC", prefix: "+687" },
  { name: "New Zealand", code: "NZ", prefix: "+64" },
  { name: "Nicaragua", code: "NI", prefix: "+505" },
  { name: "Niger", code: "NE", prefix: "+227" },
  { name: "Nigeria", code: "NG", prefix: "+234" },
  { name: "Niue", code: "NU", prefix: "+683" },
  { name: "Norfolk Island", code: "NF", prefix: "+672" },
  { name: "North Korea", code: "KP", prefix: "+850" },
  { name: "North Macedonia", code: "MK", prefix: "+389" },
  { name: "Northern Mariana Islands", code: "MP", prefix: "+1670" },
  { name: "Norway", code: "NO", prefix: "+47" },
  { name: "Oman", code: "OM", prefix: "+968" },
  { name: "Pakistan", code: "PK", prefix: "+92" },
  { name: "Palau", code: "PW", prefix: "+680" },
  { name: "Palestine", code: "PS", prefix: "+970" },
  { name: "Panama", code: "PA", prefix: "+507" },
  { name: "Papua New Guinea", code: "PG", prefix: "+675" },
  { name: "Paraguay", code: "PY", prefix: "+595" },
  { name: "Peru", code: "PE", prefix: "+51" },
  { name: "Philippines", code: "PH", prefix: "+63" },
  { name: "Pitcairn Islands", code: "PN", prefix: "+64" },
  { name: "Poland", code: "PL", prefix: "+48" },
  { name: "Portugal", code: "PT", prefix: "+351" },
  { name: "Puerto Rico", code: "PR", prefix: "+1787" },
  { name: "Qatar", code: "QA", prefix: "+974" },
  { name: "Réunion", code: "RE", prefix: "+262" },
  { name: "Romania", code: "RO", prefix: "+40" },
  { name: "Russia", code: "RU", prefix: "+7" },
  { name: "Rwanda", code: "RW", prefix: "+250" },
  { name: "Saint Barthélemy", code: "BL", prefix: "+590" },
  { name: "Saint Helena", code: "SH", prefix: "+290" },
  { name: "Saint Kitts and Nevis", code: "KN", prefix: "+1869" },
  { name: "Saint Lucia", code: "LC", prefix: "+1758" },
  { name: "Saint Martin", code: "MF", prefix: "+590" },
  { name: "Saint Pierre and Miquelon", code: "PM", prefix: "+508" },
  { name: "Saint Vincent and the Grenadines", code: "VC", prefix: "+1784" },
  { name: "Samoa", code: "WS", prefix: "+685" },
  { name: "San Marino", code: "SM", prefix: "+378" },
  { name: "São Tomé and Príncipe", code: "ST", prefix: "+239" },
  { name: "Saudi Arabia", code: "SA", prefix: "+966" },
  { name: "Senegal", code: "SN", prefix: "+221" },
  { name: "Serbia", code: "RS", prefix: "+381" },
  { name: "Seychelles", code: "SC", prefix: "+248" },
  { name: "Sierra Leone", code: "SL", prefix: "+232" },
  { name: "Singapore", code: "SG", prefix: "+65" },
  { name: "Sint Maarten", code: "SX", prefix: "+1721" },
  { name: "Slovakia", code: "SK", prefix: "+421" },
  { name: "Slovenia", code: "SI", prefix: "+386" },
  { name: "Solomon Islands", code: "SB", prefix: "+677" },
  { name: "Somalia", code: "SO", prefix: "+252" },
  { name: "South Africa", code: "ZA", prefix: "+27" },
  { name: "South Korea", code: "KR", prefix: "+82" },
  { name: "South Sudan", code: "SS", prefix: "+211" },
  { name: "Spain", code: "ES", prefix: "+34" },
  { name: "Sri Lanka", code: "LK", prefix: "+94" },
  { name: "Sudan", code: "SD", prefix: "+249" },
  { name: "Suriname", code: "SR", prefix: "+597" },
  { name: "Svalbard and Jan Mayen", code: "SJ", prefix: "+47" },
  { name: "Sweden", code: "SE", prefix: "+46" },
  { name: "Switzerland", code: "CH", prefix: "+41" },
  { name: "Syria", code: "SY", prefix: "+963" },
  { name: "Taiwan", code: "TW", prefix: "+886" },
  { name: "Tajikistan", code: "TJ", prefix: "+992" },
  { name: "Tanzania", code: "TZ", prefix: "+255" },
  { name: "Thailand", code: "TH", prefix: "+66" },
  { name: "Timor-Leste", code: "TL", prefix: "+670" },
  { name: "Togo", code: "TG", prefix: "+228" },
  { name: "Tokelau", code: "TK", prefix: "+690" },
  { name: "Tonga", code: "TO", prefix: "+676" },
  { name: "Trinidad and Tobago", code: "TT", prefix: "+1868" },
  { name: "Tunisia", code: "TN", prefix: "+216" },
  { name: "Turkey", code: "TR", prefix: "+90" },
  { name: "Turkmenistan", code: "TM", prefix: "+993" },
  { name: "Turks and Caicos Islands", code: "TC", prefix: "+1649" },
  { name: "Tuvalu", code: "TV", prefix: "+688" },
  { name: "Uganda", code: "UG", prefix: "+256" },
  { name: "Ukraine", code: "UA", prefix: "+380" },
  { name: "United Arab Emirates", code: "AE", prefix: "+971" },
  { name: "United Kingdom", code: "GB", prefix: "+44" },
  { name: "United States", code: "US", prefix: "+1" },
  { name: "Uruguay", code: "UY", prefix: "+598" },
  { name: "US Virgin Islands", code: "VI", prefix: "+1340" },
  { name: "Uzbekistan", code: "UZ", prefix: "+998" },
  { name: "Vanuatu", code: "VU", prefix: "+678" },
  { name: "Vatican City", code: "VA", prefix: "+379" },
  { name: "Venezuela", code: "VE", prefix: "+58" },
  { name: "Vietnam", code: "VN", prefix: "+84" },
  { name: "Wallis and Futuna", code: "WF", prefix: "+681" },
  { name: "Western Sahara", code: "EH", prefix: "+212" },
  { name: "Yemen", code: "YE", prefix: "+967" },
  { name: "Zambia", code: "ZM", prefix: "+260" },
  { name: "Zimbabwe", code: "ZW", prefix: "+263" },
];

interface CountryPhonePrefixSelectorProps {
  value: string;
  onChange: (prefix: string) => void;
}

export default function CountryPhonePrefixSelector({ value, onChange }: CountryPhonePrefixSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedCountry = countries.find(c => c.prefix === value) || countries.find(c => c.code === "PY");

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.prefix.includes(searchQuery) ||
    country.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (prefix: string) => {
    onChange(prefix);
    setIsOpen(false);
    setSearchQuery("");
  };

  const FlagComponent = selectedCountry ? getFlagComponent(selectedCountry.code) : null;

  return (
    <DropdownWrapper
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      minHeight={300}
      maxWidth={20}
      placement="bottom-start"
      trigger={
        <Row
          padding="12"
          paddingRight="8"
          gap="8"
          vertical="center"
          style={{ cursor: 'pointer', minWidth: '80px' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {FlagComponent && (
            <div style={{ width: '20px', height: '15px', display: 'flex', alignItems: 'center' }}>
              <FlagComponent style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}
          <Text variant="body-default-m" onBackground="neutral-strong">{selectedCountry?.prefix}</Text>
          <Icon name="chevronDown" size="xs" onBackground="neutral-weak" />
        </Row>
      }
      dropdown={
        <Column fillWidth>
          <Column padding="8" fillWidth position="sticky" top="0" background="page" zIndex={1}>
            <Input
              height="s"
              id="country-search"
              placeholder="Buscar país..."
              hasPrefix={<Icon name="search" size="xs" />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </Column>
          <Column fillWidth gap="2" padding="4" style={{ maxHeight: '240px', overflowY: 'auto' }}>
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => {
                const CountryFlag = getFlagComponent(country.code);
                return (
                  <Option
                    key={country.code}
                    label={
                      <Row gap="12" vertical="center">
                        {CountryFlag && (
                          <div style={{ width: '20px', height: '15px', display: 'flex', alignItems: 'center' }}>
                            <CountryFlag style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                        )}
                        <Text variant="body-default-m">{country.prefix}</Text>
                      </Row>
                    }
                    value={country.prefix}
                    selected={country.prefix === selectedCountry?.prefix}
                    onClick={handleSelect}
                  />
                );
              })
            ) : (
              <Column fillWidth center paddingX="16" paddingY="32">
                <Text onBackground="neutral-weak">No se encontraron países</Text>
              </Column>
            )}
          </Column>
        </Column>
      }
    />
  );
}
