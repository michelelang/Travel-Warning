var map;
countries_object = {'Canada': 'CA', 'Sao Tome and Principe': 'ST', 'Venezuela, Bolivarian Republic of': 'VE', 'Guinea-Bissau': 'GW', 'Montenegro': 'ME', 'Lithuania': 'LT', 'Cambodia': 'KH', 'Saint Helena, Ascension and Tristan da Cunha': 'SH', 'Switzerland': 'CH', 'Ethiopia': 'ET', 'Aruba': 'AW', 'Saint Martin (French part)': 'MF', 'Argentina': 'AR', 'Cameroon': 'CM', 'Burkina Faso': 'BF', 'Turkmenistan': 'TM', 'Ghana': 'GH', 'Saudi Arabia': 'SA', 'Rwanda': 'RW', 'Togo': 'TG', 'Japan': 'JP', 'American Samoa': 'AS', 'Montserrat': 'MS', 'United States Minor Outlying Islands': 'UM', 'Cocos (Keeling) Islands': 'CC', 'Pitcairn': 'PN', 'Guatemala': 'GT', 'Bosnia and Herzegovina': 'BA', 'Kuwait': 'KW', 'Russia': 'RU', 'Jordan': 'JO', 'Bonaire, Sint Eustatius and Saba': 'BQ', 'Virgin Islands, British': 'VG', 'Dominica': 'DM', 'Liberia': 'LR', 'Maldives': 'MV', 'Micronesia, Federated States of': 'FM', 'Jamaica': 'JM', 'Oman': 'OM', '\\u00c5land Islands': 'AX', 'Martinique': 'MQ', 'Christmas Island': 'CX', 'French Guiana': 'GF', 'Niue': 'NU', 'Monaco': 'MC', 'Wallis and Futuna': 'WF', 'New Zealand': 'NZ', 'Virgin Islands, U.S.': 'VI', 'Jersey': 'JE', 'Andorra': 'AD', 'Yemen': 'YE', 'Albania': 'AL', 'Samoa': 'WS', 'Norfolk Island': 'NF', 'United Arab Emirates': 'AE', 'Guam': 'GU', 'India': 'IN', 'Azerbaijan': 'AZ', 'Lesotho': 'LS', 'Saint Vincent and the Grenadines': 'VC', 'Kenya': 'KE', 'Macao': 'MO', 'Turkey': 'TR', 'Afghanistan': 'AF', 'Bangladesh': 'BD', 'Mauritania': 'MR', 'Solomon Islands': 'SB', 'Turks and Caicos Islands': 'TC', 'Saint Lucia': 'LC', 'San Marino': 'SM', 'French Polynesia': 'PF', 'France': 'FR', 'Syrian Arab Republic': 'SY', 'Bermuda': 'BM', 'Slovakia': 'SK', 'Somalia': 'SO', 'Peru': 'PE', 'Swaziland': 'SZ', 'Nauru': 'NR', 'Seychelles': 'SC', 'Norway': 'NO', 'Malawi': 'MW', 'Cook Islands': 'CK', 'Benin': 'BJ', 'Congo': 'CD', 'Western Sahara': 'EH', 'Cuba': 'CU', 'Iran, Islamic Republic of': 'IR', 'Falkland Islands (Malvinas)': 'FK', 'Macedonia, the Former Yugoslav Republic of': 'MK', 'Mayotte': 'YT', 'Heard Island and McDonald Islands': 'HM', 'China': 'CN', 'Armenia': 'AM', "C\\u00f4te d'Ivoire": 'CI', 'Timor-Leste': 'TL', 'Dominican Republic': 'DO', 'Nigeria': 'NG', 'Ukraine': 'UA', 'Bahrain': 'BH', 'Tonga': 'TO', 'Finland': 'FI', 'R\\u00e9union': 'RE', 'Libya': 'LY', 'Cayman Islands': 'KY', 'Central African Republic': 'CF', 'New Caledonia': 'NC', 'Mauritius': 'MU', 'Tajikistan': 'TJ', 'Liechtenstein': 'LI', 'Australia': 'AU', 'Mali': 'ML', 'Sweden': 'SE', 'Bulgaria': 'BG', 'Palestine, State of': 'PS', 'United States': 'US', 'Romania': 'RO', 'Angola': 'AO', 'French Southern Territories': 'TF', 'Chad': 'TD', 'South Africa': 'ZA', 'Tokelau': 'TK', 'Fiji': 'FJ', 'South Georgia and the South Sandwich Islands': 'GS', 'Brunei Darussalam': 'BN', 'Qatar': 'QA', 'Malaysia': 'MY', 'Austria': 'AT', 'Mozambique': 'MZ', 'Slovenia': 'SI', 'Uganda': 'UG', 'Hungary': 'HU', 'Niger': 'NE', 'Isle of Man': 'IM', 'Brazil': 'BR', 'Faroe Islands': 'FO', 'Guinea': 'GN', 'Panama': 'PA', 'Korea, Republic of': 'KR', 'Costa Rica': 'CR', 'Luxembourg': 'LU', 'Cape Verde': 'CV', 'Bahamas': 'BS', 'Gibraltar': 'GI', 'Ireland': 'IE', 'Pakistan': 'PK', 'Palau': 'PW', 'Cura\\u00e7ao': 'CW', 'Ecuador': 'EC', 'Czech Republic': 'CZ', 'Viet Nam': 'VN', 'Belarus': 'BY', 'Vanuatu': 'VU', 'Algeria': 'DZ', "Korea, Democratic People's Republic of": 'KP', 'El Salvador': 'SV', 'Tuvalu': 'TV', 'Saint Pierre and Miquelon': 'PM', 'Marshall Islands': 'MH', 'Chile': 'CL', 'Puerto Rico': 'PR', 'Belgium': 'BE', 'Kiribati': 'KI', 'Haiti': 'HT', 'Belize': 'BZ', 'Hong Kong': 'HK', 'Sierra Leone': 'SL', 'Georgia': 'GE', "Lao People's Democratic Republic": 'LA', 'Gambia': 'GM', 'Philippines': 'PH', 'Morocco': 'MA', 'Croatia': 'HR', 'Mongolia': 'MN', 'Guernsey': 'GG', 'Thailand': 'TH', 'Namibia': 'NA', 'Grenada': 'GD', 'Taiwan, Province of China': 'TW', 'Saint Barth\\u00e9lemy': 'BL', 'Iraq': 'IQ', 'Tanzania, United Republic of': 'TZ', 'Portugal': 'PT', 'Estonia': 'EE', 'Uruguay': 'UY', 'Equatorial Guinea': 'GQ', 'Lebanon': 'LB', 'Svalbard and Jan Mayen': 'SJ', 'Uzbekistan': 'UZ', 'Tunisia': 'TN', 'Djibouti': 'DJ', 'Greenland': 'GL', 'Antigua and Barbuda': 'AG', 'Spain': 'ES', 'Colombia': 'CO', 'Burundi': 'BI', 'Cyprus': 'CY', 'Barbados': 'BB', 'Madagascar': 'MG', 'Italy': 'IT', 'Bhutan': 'BT', 'Sudan': 'SD', 'Bolivia, Plurinational State of': 'BO', 'Nepal': 'NP', 'Malta': 'MT', 'Netherlands': 'NL', 'Northern Mariana Islands': 'MP', 'Suriname': 'SR', 'Anguilla': 'AI', 'Israel': 'IL', 'Indonesia': 'ID', 'Iceland': 'IS', 'Zambia': 'ZM', 'Senegal': 'SN', 'Papua New Guinea': 'PG', 'Saint Kitts and Nevis': 'KN', 'Trinidad and Tobago': 'TT', 'Zimbabwe': 'ZW', 'Germany': 'DE', 'Denmark': 'DK', 'Kazakhstan': 'KZ', 'Poland': 'PL', 'Moldova, Republic of': 'MD', 'Eritrea': 'ER', 'Kyrgyzstan': 'KG', 'British Indian Ocean Territory': 'IO', 'Holy See (Vatican City State)': 'VA', 'Mexico': 'MX', 'Sri Lanka': 'LK', 'Latvia': 'LV', 'South Sudan': 'SS', 'Guyana': 'GY', 'Guadeloupe': 'GP', 'Honduras': 'HN', 'Myanmar': 'MM', 'Bouvet Island': 'BV', 'Egypt': 'EG', 'Nicaragua': 'NI', 'Singapore': 'SG', 'Serbia': 'RS', 'Botswana': 'BW', 'United Kingdom': 'GB', 'Antarctica': 'AQ', 'DR Congo': 'CG', 'Sint Maarten (Dutch part)': 'SX', 'Greece': 'GR', 'Paraguay': 'PY', 'Gabon': 'GA', 'Comoros': 'KM'}
// countries_object = countries_object.toLowerCase();
//need to put value into lowercase 

  function initialize() {
    var myOptions = {
      zoom: 2,
      center: new google.maps.LatLng(10, 0),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // initialize the map
    map = new google.maps.Map(document.getElementById('map-canvas'),
        myOptions);

    // these are the map styles
    var styles = [
        {
          stylers: [
            { hue: "#00ffe6" },
            { saturation: -20 }
          ]
        },
        {
          featureType: "landscape",
          stylers: [
            { hue: "#ffff66" },
            { saturation: 100 }
          ]
        },{
          featureType: "road",
          stylers: [
            { visibility: "off" }
          ]
        },{
          featureType: "administrative.land_parcel",
          stylers: [
            { visibility: "off" }
          ]
        },{
          featureType: "administrative.locality",
          stylers: [
            { visibility: "off" }
          ]
        },{
          featureType: "administrative.neighborhood",
          stylers: [
            { visibility: "off" }
          ]
        },{
          featureType: "administrative.province",
          stylers: [
            { visibility: "off" }
          ]
        },{
          featureType: "landscape.man_made",
          stylers: [
            { visibility: "off" }
          ]
        },{
          featureType: "landscape.natural",
          stylers: [
            { visibility: "off" }
          ]
        },{
          featureType: "poi",
          stylers: [
            { visibility: "off" }
          ]
        },{
          featureType: "transit",
          stylers: [
            { visibility: "off" }
          ]
        }
      ];

    map.setOptions({styles: styles});

    // Initialize JSONP request
    var script = document.createElement('script');
    var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
    url.push('sql=');
    var query = 'SELECT name, kml_4326 FROM ' +
        '1foc3xO9DyfSIF6ofvN0kp2bxSfSeKog5FbdWdQ';
    var encodedQuery = encodeURIComponent(query);
    url.push(encodedQuery);
    url.push('&callback=drawMap');
    url.push('&key=AIzaSyAm9yWCV7JPCTHCJut8whOjARd7pwROFDQ');
    script.src = url.join('');
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(script);
  }

  function drawMap(data) {
    var rows = data['rows'];
    for (var i in rows) {
      if (rows[i][0] != 'Antarctica') {
        var newCoordinates = [];
        var geometries = rows[i][1]['geometries'];
        if (geometries) {
          for (var j in geometries) {
            newCoordinates.push(constructNewCoordinates(geometries[j]));
          }
        } else {
          newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
        }
        var country = new google.maps.Polygon({
          paths: newCoordinates,
          strokeColor: '#ff9900',
          strokeOpacity: 1,
          strokeWeight: 0.3,
          fillColor: '#ffff66',
          fillOpacity: 0,
          name: rows[i][0]
        });
        google.maps.event.addListener(country, 'mouseover', function() {
          this.setOptions({fillOpacity: 0.4});
        });
        google.maps.event.addListener(country, 'mouseout', function() {
          this.setOptions({fillOpacity: 0});
        });
        google.maps.event.addListener(country, 'click', function() {
            let countryName = this.name;
            var lower_id = (countries_object[this.name]).toLowerCase();
            // let result;
            let dataTravel;

   
            // $.when($.get("https://floating-woodland-60212.herokuapp.com/level?country="+lower_id),
            //        $.get("https://floating-woodland-60212.herokuapp.com/topheadlines?country="+lower_id+"&limit=2")).done(function(data1, data2){
            //             /*a1 and a2 are arguments resolved for the page1 and page2 ajax requests, respectively.
            //             Each argument is an array with the following structure: [ data, statusText, jqXHR ]*/
            //             //var data = a1[0] + a2[0]; // a1[ 0 ] = "Whip", a2[ 0 ] = " It"
            //             let modalTravelWarning = data1[0];
            //             let secondResponse = data2[0];
            //             console.log(modalTravelWarning, secondResponse);
            //             let modalBodyText = "";
            //             for(let i=0; i < secondResponse.length; i++) {
            //                 modalBodyText += "Date: " + data[i].date + " " + data[i]["title"] + " " + data[i]["description"] + "\n";
            //             }
            //             $("#modal-title").text(countryName);
            //             $("#modal-body").text(modalTravelWarning + " " + modalBodyText);

            //             $("#hidden-button").trigger('click');
            // });
            
            $.get("https://floating-woodland-60212.herokuapp.com/level?country="+lower_id, function(dataTravel){
                console.log(dataTravel);
                return dataTravel;    
            });

            $.get("https://floating-woodland-60212.herokuapp.com/topheadlines?country="+lower_id+"&limit=2", function(data){
                console.log(data);
                let modalBodyText = "";
                for(let i=0; i < data.length; i++) {
                    modalBodyText += "Date: " + data[i].date + " " + data[i]["title"] + " " + data[i]["description"] + "\n";
                }
                let modalTravelWarning = dataTravel;
                $("#modal-title").text(countryName);
                $("#modal-body").text(modalTravelWarning + " " + modalBodyText);

                $("#hidden-button").trigger('click');
                
            });

        });

        country.setMap(map);
      }
    }
  }

  function constructNewCoordinates(polygon) {
    var newCoordinates = [];
    var coordinates = polygon['coordinates'][0];
    for (var i in coordinates) {
      newCoordinates.push(
          new google.maps.LatLng(coordinates[i][1], coordinates[i][0]));
    }
    return newCoordinates;
  }

  google.maps.event.addDomListener(window, 'load', initialize);




