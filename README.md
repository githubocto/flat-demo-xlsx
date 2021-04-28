# Flat Data Demo: XLSX to CSV

This demo is part of a larger Flat Data project created by [GitHub OCTO](https://octo.github.com/). Read more about the project [here](https://octo.github.com/blog/flat-data).

## What this demo does

This repository uses a [Flat Data Action](https://octo.github.com/blog/flat-data) to fetch a XLSX file from an http endpoint every 15 minutes. Using a postprocessing script, Flat converts the XLSX file to a CSV file.

Inside `.github/workflows/flat.yaml`:
```yaml
- name: Fetch data
        uses: githubocto/flat@v2
        with:
          http_url: https://www.mobileconnectivityindex.com/widgets/connectivityIndex/excel/MCI_Data_2020.xlsx
          downloaded_filename: mobile-connectivity.xlsx # The http_url gets saved and renamed in our repository as this file
          postprocess: ./postprocess.ts # A postprocessing javascript or typescript file written in Deno
```

<img src="https://raw.githubusercontent.com/githubocto/flat-demo-xlsx/readme-assets/assets/diagram.png" alt="diagram" width="400"/>

## Postprocessing

Refer to the [Flat postprocessing library](https://github.com/githubocto/flat-postprocessing) for more helper functions and examples for writing postprocessing scripts.

## License

[MIT](LICENSE)
