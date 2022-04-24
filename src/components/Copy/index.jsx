import { IconButton, Snackbar, Tooltip } from "@mui/material";
import React, { Fragment, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CopiedIcon, CopyIcon } from "../../assets/Icons";
import { useAppContext } from "./../../hooks/index";
import colors from "./../../colors";

export default function Copy({ value, title }) {
  const [copied, setCopied] = useState(false);
  const { isSmall } = useAppContext();
  return (
    <Fragment>
      <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
        <Tooltip
          title={copied ? "Copied" : `Copy ${title}`}
          placement="top"
          disableInteractive
          arrow
        >
          <IconButton
            size="small"
            sx={{ py: 0 }}
            onMouseLeave={(event) =>
              !isSmall &&
              setTimeout(() => {
                setCopied(false);
              }, 1000)
            }
          >
            {copied ? (
              <CopiedIcon height={18} width={18} />
            ) : (
              <CopyIcon height={18} width={18} />
            )}
          </IconButton>
        </Tooltip>
      </CopyToClipboard>
      {isSmall && (
        <Snackbar
          open={copied}
          autoHideDuration={1000}
          onClose={() => setCopied(false)}
          message={`${title} Copied Successfully`}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          sx={{ width: "fit-content", p: 0, m: "auto" }}
        />
      )}
    </Fragment>
  );
}
