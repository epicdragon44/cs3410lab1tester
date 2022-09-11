import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import RandomUtils from "../libs/random";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ALU: NextPage = () => {
    // constants
    const num_of_lines = 25;
    const first_line = "Op[4] A[32] B[32] Sa[5] C[32] V";
    const format_as_binary = false;

    // hook to display the generated test file
    const [testCases, setTestCases] = React.useState("");

    const generateAndTest = (): string => {
        let A = RandomUtils.randomInt(-2147483648, 2147483647);
        let B = RandomUtils.randomInt(-2147483648, 2147483647);
        let Sa = RandomUtils.randomInt(0, 31);
        let Op = "0101";
        let V = 0;
        let C = A & B;

        let line = Op + " " + A + " " + B + " " + Sa + " " + C + " " + V;
        return line;
    };

    const generateOrTest = (): string => {
        let A = RandomUtils.randomInt(-2147483648, 2147483647);
        let B = RandomUtils.randomInt(-2147483648, 2147483647);
        let Sa = RandomUtils.randomInt(0, 31);
        let Op = "0100";
        let V = 0;
        let C = A | B;

        let line = Op + " " + A + " " + B + " " + Sa + " " + C + " " + V;
        return line;
    };

    const generateXorTest = (): string => {
        let A = RandomUtils.randomInt(-2147483648, 2147483647);
        let B = RandomUtils.randomInt(-2147483648, 2147483647);
        let Sa = RandomUtils.randomInt(0, 31);
        let Op = "0010";
        let V = 0;
        let C = A ^ B;

        let line = Op + " " + A + " " + B + " " + Sa + " " + C + " " + V;
        return line;
    };

    const generateNorTest = (): string => {
        let A = RandomUtils.randomInt(-2147483648, 2147483647);
        let B = RandomUtils.randomInt(-2147483648, 2147483647);
        let Sa = RandomUtils.randomInt(0, 31);
        let Op = "0011";
        let V = 0;
        let C = ~(A | B);

        let line = Op + " " + A + " " + B + " " + Sa + " " + C + " " + V;
        return line;
    };

    const convertNegativeNumToTwosComplementRepresentation = (
        num: number
    ): string => {
        let binary = num.toString(2);
        let twosComplement = "";
        let carry = 1;
        for (let i = binary.length - 1; i >= 0; i--) {
            if (binary[i] === "1") {
                if (carry === 1) {
                    twosComplement = "0" + twosComplement;
                } else {
                    twosComplement = "1" + twosComplement;
                }
            } else {
                if (carry === 1) {
                    twosComplement = "1" + twosComplement;
                    carry = 0;
                } else {
                    twosComplement = "0" + twosComplement;
                }
            }
        }
        return twosComplement;
    };

    const generateLogicalShiftLeftTest = (): string => {
        let A = RandomUtils.randomInt(-2147483648, 2147483647);
        let B = RandomUtils.randomInt(-2147483648, 2147483647);
        let Sa = RandomUtils.randomInt(0, 31);
        let Op = Math.random() > 0.5 ? "1001" : "1000";
        let V = 0;
        let C = B << Sa;

        let line = Op + " " + A + " " + B + " " + Sa + " " + C + " " + V;
        return line;
    };

    const generateLogicalShiftRightTest = (): string => {
        let A = RandomUtils.randomInt(-2147483648, 2147483647);
        let B = RandomUtils.randomInt(-2147483648, 2147483647);
        let Sa = RandomUtils.randomInt(0, 31);
        let Op = "1100";
        let V = 0;
        let C = B >>> Sa;

        let line = Op + " " + A + " " + B + " " + Sa + " " + C + " " + V;
        return line;
    };

    const generateArithmeticShiftRightTest = (): string => {
        let A = RandomUtils.randomInt(-2147483648, 2147483647);
        let B = RandomUtils.randomInt(-2147483648, 2147483647);
        let Sa = RandomUtils.randomInt(0, 31);
        let Op = "1101";
        let V = 0;
        let C = B >> Sa;

        let line = Op + " " + A + " " + B + " " + Sa + " " + C + " " + V;
        return line;
    };

    const generateNotEqualTest = (): string => {
        let A = RandomUtils.randomInt(-2147483648, 2147483647);
        let B = RandomUtils.randomInt(-2147483648, 2147483647);
        let Astr = A.toString(2).padStart(32, "0");
        let Bstr = B.toString(2).padStart(32, "0");

        let Sa = RandomUtils.randomInt(0, 31);
        let Op = "0000";

        let V = 0;

        let C = Astr !== Bstr ? 1 : 0;

        let line = Op + " " + A + " " + B + " " + Sa + " " + C + " " + V;
        return line;
    };

    const generateEqualTest = (): string => {
        let A = RandomUtils.randomInt(-2147483648, 2147483647);
        let B = RandomUtils.randomInt(-2147483648, 2147483647);
        let Astr = A.toString(2).padStart(32, "0");
        let Bstr = B.toString(2).padStart(32, "0");

        let Sa = RandomUtils.randomInt(0, 31);
        let Op = "0001";

        let V = 0;

        let C = Astr === Bstr ? 1 : 0;

        let line = Op + " " + A + " " + B + " " + Sa + " " + C + " " + V;
        return line;
    };

    const generateLessThanTest = (): string => {
        // less than or equal to zero
        let A = RandomUtils.randomInt(-2147483648, 2147483647);
        let B = RandomUtils.randomInt(-2147483648, 2147483647);
        let Sa = RandomUtils.randomInt(0, 31);
        let Op = "1110";
        let V = 0;
        let C = A <= 0 ? 1 : 0;

        let line = Op + " " + A + " " + B + " " + Sa + " " + C + " " + V;
        return line;
    };

    const generateGreaterThanTest = (): string => {
        // greater than or equal to zero
        let A = RandomUtils.randomInt(-2147483648, 2147483647);
        let B = RandomUtils.randomInt(-2147483648, 2147483647);
        let Sa = RandomUtils.randomInt(0, 31);
        let Op = "1111";
        let V = 0;
        let C = A > 0 ? 1 : 0;

        let line = Op + " " + A + " " + B + " " + Sa + " " + C + " " + V;
        return line;
    };

    const generateAddTest = (): string => {
        let A = RandomUtils.randomInt(-2147483648, 2147483647);
        let B = RandomUtils.randomInt(-2147483648, 2147483647);
        let Sa = RandomUtils.randomInt(0, 31);
        let Op = Math.random() > 0.5 ? "0110" : "0111";
        let C = A + B;

        // V stores the overflow bit
        let V = Math.abs(C) > 2147483647 ? 1 : 0;

        let line = Op + " " + A + " " + B + " " + Sa + " " + C + " " + V;
        return line;
    };

    const generateSubTest = (): string => {
        let A = RandomUtils.randomInt(-2147483648, 2147483647);
        let B = RandomUtils.randomInt(-2147483648, 2147483647);
        let Sa = RandomUtils.randomInt(0, 31);
        let Op = Math.random() > 0.5 ? "1010" : "1011";
        let C = A - B;

        // V stores the overflow bit
        let V = Math.abs(C) > 2147483647 ? 1 : 0;

        let line = Op + " " + A + " " + B + " " + Sa + " " + C + " " + V;
        return line;
    };

    // generates a new test file with a lot of test cases
    const generate = (): void => {
        let newText = first_line;

        for (let i = 0; i < num_of_lines; i++) {
            // Generate new test cases
            newText += "\n" + generateAndTest();
            newText += "\n" + generateOrTest();
            newText += "\n" + generateXorTest();
            newText += "\n" + generateNorTest();

            newText += "\n" + generateLogicalShiftLeftTest();
            newText += "\n" + generateLogicalShiftRightTest();
            newText += "\n" + generateArithmeticShiftRightTest();

            newText += "\n" + generateNotEqualTest();
            newText += "\n" + generateEqualTest();

            newText += "\n" + generateLessThanTest();
            newText += "\n" + generateGreaterThanTest();

            newText += "\n" + generateAddTest();
            newText += "\n" + generateSubTest();
        }

        // set the text
        setTestCases(newText);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>ALU Test Case Generator</title>
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
                    for ALU
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

export default ALU;
