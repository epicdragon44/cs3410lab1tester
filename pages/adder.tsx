import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import RandomUtils from "../libs/random";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Adder: NextPage = () => {
    // constants
    const num_of_lines = 325;
    const first_line =
        "A[32] B[32] Cin C[32] V" +
        "\n# Notes: Please see the provided ALU Design Report, Page 3, for detailed insight into how testing works." +
        "\n#        " +
        "\n#        The first line above is the header, indicating pins and their bit widths." +
        "\n#        " +
        "\n#        The 325 lines that follow are test cases generated by my custom test case generator: https://cs3410lab1tester.vercel.app" +
        "\n#        In case you're wondering, the generated cases are robust, and will take advantage of TypeScript features to ensure every feature (such as negative or positive inputs) required was tested at at least one point." +
        "\n#        " +
        "\n#        The last few lines at the end are carefully-generated edge cases that conform to specific use cases." +
        "\n#        In this case, it attempts lots of different combinations of 0s, 1s, -1s, and Max and Min values for 32-bit integers (unsigned or signed) to attempt to force an overflow or some similar edge case.";

    const format_as_binary = false;
    const edge_cases = [
        "2147483647 -2147483648 0 4294967295 0",
        "2147483647 2147483647 0 4294967294 1",
        "2147483647 2147483647 1 4294967295 1",
        "-2147483648 -2147483648 0 0 1",
        "-2147483648 -2147483648 1 1 1",
        "2147483647 -2147483648 1 0 0",
        " 0 0 0 0 0",
        "0 0 1 1 0 ",
        "0 1 0 1 0 ",
        "-1 1 0 0 0 ",
        "1 0 0 1 0 ",
        "-1 0 1 0 0 ",
        "1 1 0 2 0 ",
        "0 -1 0 -1 0",
    ];

    // hook to display the generated test file
    const [testCases, setTestCases] = React.useState("");

    // All test files generated should have at least all these features present
    type SingularTestCase = {
        line: string;
        features: {
            containsNegative: boolean;
            containsPositive: boolean;
            containsOverflow: boolean;
            containsCarryin: boolean;
        };
    };

    // generates a new singlar test case
    const newLine = (asBinary: boolean): SingularTestCase => {
        let line = "";
        let a = RandomUtils.randomInt(-2147483648, 2147483647);
        let b = RandomUtils.randomInt(-2147483648, 2147483647);
        let cin = RandomUtils.randomInt(0, 1);

        let c = a + b + cin;
        let v = c > 2 ** 31 - 1 || c < (-2) ** 31 ? 1 : 0;

        if (asBinary) {
            line += a.toString(2).padStart(32, "0") + " ";
            line += b.toString(2).padStart(32, "0") + " ";
            line += cin.toString(2) + " ";
            line += c.toString(2).padStart(32, "0") + " ";
            line += v.toString(2) + " ";
        } else {
            line += a + " ";
            line += b + " ";
            line += cin + " ";
            line += c + " ";
            line += v + " ";
        }

        return {
            line: line,
            features: {
                containsNegative: a < 0 || b < 0,
                containsPositive: a > 0 || b > 0,
                containsOverflow: v === 1,
                containsCarryin: cin === 1,
            },
        };
    };

    // generates a new test file with a lot of test cases
    const generate = (): void => {
        let featureCheck = {
            containsNegative: false,
            containsPositive: false,
            containsOverflow: false,
            containsCarryin: false,
        };

        let newText = first_line;
        for (let i = 0; i < num_of_lines; i++) {
            // Generate a new test case
            let o = newLine(format_as_binary);

            // Check if the new line contains any of the features
            for (let key in featureCheck) {
                if (o.features[key as keyof typeof o.features]) {
                    featureCheck[key as keyof typeof featureCheck] = true;
                }
            }

            // Append the new line to the text
            newText += "\n" + o.line;
        }

        // if the feature check features aren't all true, generate again
        for (let key in featureCheck) {
            if (!featureCheck[key as keyof typeof featureCheck]) {
                generate();
                return;
            }
        }

        // add the edge cases
        for (let i = 0; i < edge_cases.length; i++) {
            newText += "\n" + edge_cases[i];
        }

        // if the feature check passes, set the text
        setTestCases(newText);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Add32 Test Case Generator</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.notmain}>
                <h1 className={styles.title}>
                    <a onClick={generate} className='hover:cursor-pointer'>
                        Generate Test Case{" "}
                    </a>{" "}
                    for Adder32
                </h1>
                <br />
                <br />
                <CopyToClipboard text={testCases}>
                    <button className='bg-blue-600 text-white text-sm leading-6 font-medium py-2 px-5 rounded-lg'>
                        Copy to Clipboard
                    </button>
                </CopyToClipboard>
                <br />
                <br />
                <hr />
                <br />
                <code className={styles.code}>{testCases}</code>
            </main>
        </div>
    );
};

export default Adder;
