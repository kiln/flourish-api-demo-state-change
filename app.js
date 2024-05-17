// Initial options
const API_KEY = "<INSERT YOUR API KEY HERE>";

const options = {
  template: "@flourish/line-bar-pie",
  version: "27.3.1",
  api_key: API_KEY,
  container: "#container",
  private: false,
  state: {
    chart_type: "area_stacked",
    color: {
      categorical_palette: [
        "#4328e7",
        "#9654e5",
        "#ff6283",
        "#ff8800",
        "#ffc502",
        "#007d8e",
        "#1aa7ee",
        "#29dae4",
        "#88e99a",
        "#019c00",
        "#c11f1f",
        "#730000",
      ],
    },
    layout: {},
    series_filter_mode: "none",
  },
  bindings: {
    data: {
      label: 0,
      metadata: [],
      value: [1, 2, 3, 4, 5, 6, 7],
    },
  },
  data: {
    data: [
      [
        "Year",
        "East Asia Pacific",
        "Europe and Central Asia",
        "Latin America and Caribbean",
        "Middle East and North Africa",
        "North America",
        "South Asia",
        "Sub-Saharan Africa",
      ],
      [
        "1900",
        "547393877",
        "436414138",
        "64998422",
        "43208508",
        "84175306",
        "350540135",
        "117163110",
      ],
      [
        "1910",
        "594753596",
        "474222906",
        "77591234",
        "48649217",
        "102862278",
        "372023967",
        "119260854",
      ],
      [
        "1920",
        "659157743",
        "489229454",
        "91168073",
        "50825892",
        "119836619",
        "387704221",
        "123915343",
      ],
      [
        "1930",
        "704201243",
        "526240276",
        "109797863",
        "59157994",
        "138303285",
        "421263525",
        "139829253",
      ],
      [
        "1940",
        "766747939",
        "566374526",
        "131946987",
        "68794014",
        "150046759",
        "478642028",
        "158139339",
      ],
      [
        "1950",
        "839528911",
        "595402538",
        "167799438",
        "82886853",
        "162061788",
        "458522196",
        "183346136",
      ],
      [
        "1960",
        "1021442216",
        "665942434",
        "219080863",
        "105831537",
        "194139982",
        "571192447",
        "227950604",
      ],
      [
        "1970",
        "1280165750",
        "736196696",
        "285722835",
        "138875639",
        "221814953",
        "720399239",
        "293905696",
      ],
      [
        "1980",
        "1540177846",
        "791447004",
        "361441805",
        "187358958",
        "247705111",
        "904993069",
        "388784611",
      ],
      [
        "1990",
        "1817430613",
        "841398939",
        "441491220",
        "256504952",
        "275798424",
        "1141312743",
        "516663000",
      ],
      [
        "2000",
        "2026416405",
        "861118777",
        "521273687",
        "321092415",
        "313143266",
        "1406945514",
        "671240707",
      ],
      [
        "2010",
        "2196097404",
        "887745611",
        "589276426",
        "397912829",
        "345209730",
        "1660546166",
        "879833244",
      ],
      [
        "2020",
        "2352370407",
        "920690065",
        "650518373",
        "479725242",
        "373894771",
        "1882327653",
        "1151341133",
      ],
    ],
  },
  metadata: {
    data: {
      0: {
        type: "datetime",
        type_id: "datetime$%Y",
        output_format_id: "datetime$%Y",
      },
      1: {
        type: "number",
        type_id: "number$none_point",
        output_format_id: "number$comma_point",
      },
      2: {
        type: "number",
        type_id: "number$none_point",
        output_format_id: "number$none_point",
      },
      3: {
        type: "number",
        type_id: "number$none_point",
        output_format_id: "number$none_point",
      },
      4: {
        type: "number",
        type_id: "number$none_point",
        output_format_id: "number$none_point",
      },
      5: {
        type: "number",
        type_id: "number$none_point",
        output_format_id: "number$none_point",
      },
      6: {
        type: "number",
        type_id: "number$none_point",
        output_format_id: "number$none_point",
      },
      7: {
        type: "number",
        type_id: "number$none_point",
        output_format_id: "number$none_point",
      },
    },
  },
};

// Initial visual
const visual = new Flourish.Live(options);

// Control elements
const control_title = document.querySelector("#controls #title");
const control_type = document.querySelector("#controls #chart-type");
const control_filter_mode = document.querySelector("#controls #filter-mode");
const control_color = document.querySelector("#controls #color");

// Set initial control values
control_type.value = options.state.chart_type;
control_filter_mode.value = options.state.series_filter_mode;

// Handle state updates
control_title.addEventListener("input", function (e) {
  options.state.layout.title = e.target.value;
  visual.update(options);
});

control_type.addEventListener("change", function (e) {
  options.state.chart_type = e.target.value;
  visual.update(options);
});

control_filter_mode.addEventListener("change", function (e) {
  options.state.series_filter_mode = e.target.value;
  visual.update(options);
});

const colors = {
  palette_1: [
    "#4328E7",
    "#9654E5",
    "#FF6283",
    "#FF8800",
    "#FFC502",
    "#007D8E",
    "#1AA7EE",
  ],
  palette_2: [
    "#EDD8C4",
    "#C4A999",
    "#F9C1C0",
    "#B76A4C",
    "#8F483C",
    "#783027",
    "#8A1D2E",
  ],
};

control_color.addEventListener("change", function (e) {
  options.state.color.categorical_palette = colors[e.target.value];
  visual.update(options);
});
