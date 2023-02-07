"use client";

import React, { ChangeEvent } from "react";

async function uploadFile(fileList: FileList) {
  if (!fileList) return;

  let formData = new FormData();

  for (let i = 0; i < fileList.length; i++) {
    let file = fileList[i];
    formData.append("file", file, file.name);
  }

  // const res = await fetch("/upload", {
  //   method: "POST",
  //   body: formData,
  //   headers: {
  //     "Content-Type": "file.type",
  //   },
  // });

  // if (!res.ok) {
  //   throw new Error(`Failed to upload file: ${res.statusText}`);
  // }

  // const data = await res.json();
  // return data;

  // console.log(formData);
}

export default function Card() {
  const [fileList, setFileList] = React.useState<FileList>();

  const handleDrag = function (e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
  };

  const handleDrop = function (e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      for (let i = 0; i < files.length; i++) {
        const file = files.item(i);
        if (file && file?.size > 7000000) {
          alert("The image file size is too big!");
          return;
        }
      }

      setFileList(e.dataTransfer.files);
    }
  };

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFileList(e.target.files);
    }
  }

  return (
    <div className="absolute left-1/2 top-[40%] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white px-8 py-6">
      <h2 className="text-4xl font-semibold">Upload Your Photos</h2>
      <hr className="my-3 mx-auto h-[3px] rounded-sm bg-hr opacity-30"></hr>
      <p className="mb-6 tracking-wide">
        Select up to 5 high quality images to upload into our database. If your
        image is selected, a member of our team will contact you for
        attribution.
      </p>

      <div className="relative my-2 flex flex-col items-center py-2">
        <form method="post">
          <label
            htmlFor="file-upload"
            className="inline-flex cursor-pointer items-center justify-center rounded-3xl border border-dashed border-secondary bg-white stroke-secondary py-6 px-8 font-medium text-secondary outline outline-1 outline-offset-2 focus-within:outline-none focus-within:ring-1  focus-within:ring-secondary focus-within:ring-offset-2 hover:border-gray-300 hover:bg-gray-50 hover:stroke-gray-500 hover:text-gray-500"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4 h-6 w-6 fill-current"
              viewBox="0 0 46 38"
            >
              <path d="M34.982 9.303A12.285 12.285 0 0 0 11.15 9.29a12.3 12.3 0 0 0 1.153 24.547h4.612a1.538 1.538 0 0 0 0-3.075h-4.612a9.225 9.225 0 1 1-.054-18.45 1.596 1.596 0 0 0 1.691-1.313 9.211 9.211 0 0 1 18.238 0 1.66 1.66 0 0 0 1.65 1.313 9.225 9.225 0 1 1 0 18.45h-4.613a1.538 1.538 0 1 0 0 3.075h4.613a12.3 12.3 0 0 0 1.153-24.533Z" />
              <path d="M29.667 27.312a1.538 1.538 0 0 0 2.174-2.174l-7.688-7.688a1.537 1.537 0 0 0-2.174 0l-7.687 7.688a1.538 1.538 0 0 0 2.174 2.174l5.063-5.063v19.35a1.537 1.537 0 0 0 3.075 0V22.25l5.063 5.063Z" />
            </svg>
            Drag & Drop Your Images
            <input
              id="file-upload"
              name="file-upload"
              onChange={handleFileChange}
              type="file"
              multiple
              accept="image/*"
              className="sr-only"
            />
          </label>

          {fileList && (
            <button
              type="button"
              className="absolute inset-y-[5px] right-6 inline-flex items-center rounded-3xl border border-secondary bg-white px-4 py-2 text-base font-medium text-secondary shadow-sm hover:border-gray-500 hover:bg-gray-50 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              onClick={() => {
                uploadFile(fileList);

                // simulate a little delay to pretend we are making a network request
                setTimeout(() => {
                  setFileList(undefined);
                }, 500);
              }}
            >
              Upload
            </button>
          )}
        </form>
      </div>
      <div className="mt-4 flex items-center justify-center px-2 text-sm text-gray-500">
        <ul>
          {fileList &&
            Array.from(fileList).map((file) => (
              <li key={file.name} className="py-px">
                {file.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
